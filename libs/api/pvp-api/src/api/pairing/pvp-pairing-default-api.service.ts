import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CRCZPHttpService } from '@crczp/api-common';
import { PortalConfig } from '@crczp/utils';
import { PvpPairing, PvpPairingCreateRequest } from '@crczp/pvp-model';
import { PvpPairingApi } from './pvp-pairing-api.service';
import { PvpPairingDTO } from '../../dto/pvp-pairing-dto';
import { PvpPairingCreateDTO } from '../../dto/pvp-pairing-create-dto';
import { PvpPairingMapper } from '../../mappers/pvp-pairing-mapper';

/**
 * Default implementation of {@link PvpPairingApi}, calling the real `/pvp-pairing` endpoints.
 */
@Injectable()
export class PvpPairingDefaultApi extends PvpPairingApi {
    private readonly http = inject(CRCZPHttpService);
    private readonly pairingsEndpointUri: string;

    constructor() {
        super();
        this.pairingsEndpointUri =
            inject(PortalConfig).basePaths.linearTraining + '/pvp-pairing';
    }

    create(request: PvpPairingCreateRequest): Observable<PvpPairing> {
        return this.http
            .post<PvpPairingCreateDTO, PvpPairingDTO>(
                this.pairingsEndpointUri,
                'Create PvP pairing',
            )
            .withBody(PvpPairingMapper.toCreateDTO(request))
            .withMapper(PvpPairingMapper.fromDTO)
            .execute();
    }

    get(pairingId: number): Observable<PvpPairing> {
        return this.http
            .get<PvpPairingDTO>(
                `${this.pairingsEndpointUri}/${pairingId}`,
                'Read PvP pairing',
            )
            .withMapper(PvpPairingMapper.fromDTO)
            .execute();
    }

    dissolve(pairingId: number): Observable<void> {
        return this.http
            .delete<void>(
                `${this.pairingsEndpointUri}/${pairingId}`,
                'Dissolve PvP pairing',
            )
            .execute();
    }

    assignPool(pairingId: number, poolId: number): Observable<void> {
        return this.http
            .patch<{ poolId: number }, void>(
                `${this.pairingsEndpointUri}/${pairingId}/assign-pool`,
                'Assign pool to PvP pairing',
            )
            .withBody({ poolId })
            .execute();
    }

    unassignPool(pairingId: number): Observable<void> {
        return this.http
            .patch<void, void>(
                `${this.pairingsEndpointUri}/${pairingId}/unassign-pool`,
                'Unassign pool from PvP pairing',
            )
            .execute();
    }
}

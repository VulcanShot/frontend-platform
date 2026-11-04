import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CRCZPHttpService } from '@crczp/api-common';
import { PortalConfig } from '@crczp/utils';
import { PvpMatch, PvpMatchCreateRequest } from '@crczp/pvp-model';
import { PvpMatchApi } from './pvp-match-api.service';
import { PvpMatchDTO } from '../../dto/pvp-match-dto';
import { PvpMatchCreateDTO } from '../../dto/pvp-match-create-dto';
import { PvpMatchMapper } from '../../mappers/pvp-match-mapper';

/**
 * Default implementation of {@link PvpMatchApi}, calling the real `/pvp-match` endpoints.
 */
@Injectable()
export class PvpMatchDefaultApi extends PvpMatchApi {
    private readonly http = inject(CRCZPHttpService);
    private readonly matchesEndpointUri: string;

    constructor() {
        super();
        this.matchesEndpointUri =
            inject(PortalConfig).basePaths.linearTraining + '/pvp-match';
    }

    create(request: PvpMatchCreateRequest): Observable<PvpMatch> {
        return this.http
            .post<PvpMatchCreateDTO, PvpMatchDTO>(
                this.matchesEndpointUri,
                'Create PvP match',
            )
            .withBody(PvpMatchMapper.toCreateDTO(request))
            .withMapper(PvpMatchMapper.fromDTO)
            .execute();
    }

    dissolve(matchId: number): Observable<void> {
        return this.http
            .delete<void>(
                `${this.matchesEndpointUri}/${matchId}`,
                'Dissolve PvP match',
            )
            .execute();
    }
}

import { Observable } from 'rxjs';
import { PvpPairing, PvpPairingCreateRequest } from '@crczp/pvp-model';

/**
 * Abstracts http communication with a PvP pairing's own lifecycle endpoints.
 */
export abstract class PvpPairingApi {
    /**
     * Pairs two PvP sides over one future pool, under shared size bounds.
     * @param request the two sides and the shared bounds to pair them under
     */
    abstract create(request: PvpPairingCreateRequest): Observable<PvpPairing>;

    /**
     * Reads a pairing's own configuration.
     * @param pairingId the pairing id
     */
    abstract get(pairingId: number): Observable<PvpPairing>;

    /**
     * Dissolves a pairing. Refused while a pool is still shared.
     * @param pairingId the pairing id
     */
    abstract dissolve(pairingId: number): Observable<void>;

    /**
     * Assigns a sandbox pool to a pairing.
     * @param pairingId the pairing id
     * @param poolId the pool to assign
     */
    abstract assignPool(pairingId: number, poolId: number): Observable<void>;

    /**
     * Unassigns a pairing's pool. Refused while any match still holds a claimed sandbox.
     * @param pairingId the pairing id
     */
    abstract unassignPool(pairingId: number): Observable<void>;
}

import { Observable } from 'rxjs';
import { PvpMatch, PvpMatchCreateRequest } from '@crczp/pvp-model';

/**
 * Abstracts http communication with a PvP match's manual-override lifecycle endpoints. Automatic
 * pairing of unmatched teams already covers the common case; this is the organizer's override.
 */
export abstract class PvpMatchApi {
    /**
     * Pairs one team from each side of a pairing into a match.
     * @param request the pairing and the two teams to pair
     */
    abstract create(request: PvpMatchCreateRequest): Observable<PvpMatch>;

    /**
     * Dissolves a match that has not yet claimed a sandbox.
     * @param matchId the match id
     */
    abstract dissolve(matchId: number): Observable<void>;
}

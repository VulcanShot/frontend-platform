import { Observable } from 'rxjs';
import { PvpPairingLobby, PvpSideLobby, PvpTeam, PvpUserTeamAssignment } from '@crczp/pvp-model';

/**
 * Abstracts http communication with a PvP side's queue, roster and team-management endpoints.
 */
export abstract class PvpLobbyApi {
    /** Reads the number of players waiting in a side's queue. */
    abstract getWaitingCount(accessToken: string): Observable<number>;

    /** Reads the pairing's start date, as the backend formats it. */
    abstract getStartDate(accessToken: string): Observable<string>;

    /** Reads the caller's own assigned team. */
    abstract getAssignedTeam(accessToken: string): Observable<PvpTeam>;

    /** Reads both sides' lobbies of one pairing in one payload. */
    abstract getPairingLobby(pairingId: number): Observable<PvpPairingLobby>;

    /** Reads a single side's lobby. */
    abstract getInstanceLobby(instanceId: number): Observable<PvpSideLobby>;

    /** Creates a further team on a side that already holds at least one. */
    abstract createTeam(instanceId: number, name: string): Observable<PvpTeam>;

    /** Disbands a team. */
    abstract disbandTeam(instanceId: number, teamId: number): Observable<void>;

    /** Renames a team. */
    abstract renameTeam(
        instanceId: number,
        teamId: number,
        name: string,
    ): Observable<string>;

    /**
     * Accepts a batch of queued players onto named teams of one side, in one call — the operation
     * that satisfies "automatic team balancing".
     */
    abstract acceptOntoRoster(
        instanceId: number,
        assignments: PvpUserTeamAssignment[],
    ): Observable<void>;

    /** Adds a batch of users to a side's queue. */
    abstract addToQueue(instanceId: number, userIds: number[]): Observable<void>;

    /** Moves a batch of players between two teams of the same side. */
    abstract moveBetweenTeamsOfSameInstance(
        instanceId: number,
        fromTeamId: number,
        toTeamId: number,
        playerIds: number[],
    ): Observable<void>;

    /**
     * Moves a batch of players between the two teams of one match — the cross-side move, reversible
     * by calling this again naming each player's recorded original side.
     */
    abstract moveBetweenMatchTeams(
        matchId: number,
        fromTeamId: number,
        playerIds: number[],
    ): Observable<void>;
}

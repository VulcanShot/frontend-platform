/**
 * Pairing of two PvP sides over one shared pool, and the team-size bounds and lobby timeout both
 * sides play by.
 */
export class PvpPairing {
    id!: number;
    firstInstanceId!: number;
    secondInstanceId!: number;
    poolId: number | null = null;
    lobbyTimeoutSeconds!: number;
    maxTeamSize!: number;
    minTeamSize!: number;
}

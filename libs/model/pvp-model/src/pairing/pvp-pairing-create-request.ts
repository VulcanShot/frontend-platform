/**
 * Pairs two PvP sides over one future pool, under shared size bounds.
 */
export class PvpPairingCreateRequest {
    firstInstanceId!: number;
    secondInstanceId!: number;
    lobbyTimeoutSeconds!: number;
    maxTeamSize!: number;
    minTeamSize!: number;
}

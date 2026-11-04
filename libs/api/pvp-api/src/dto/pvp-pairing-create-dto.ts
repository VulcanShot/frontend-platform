/**
 * Wire shape pairing two PvP sides over one future pool, under shared size bounds.
 */
export interface PvpPairingCreateDTO {
    firstInstanceId: number;
    secondInstanceId: number;
    lobbyTimeoutSeconds: number;
    maxTeamSize: number;
    minTeamSize: number;
}

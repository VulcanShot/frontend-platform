/**
 * Wire shape of a pairing's own configuration: its sides and its shared bounds.
 */
export interface PvpPairingDTO {
    id: number;
    firstInstanceId: number;
    secondInstanceId: number;
    poolId: number | null;
    lobbyTimeoutSeconds: number;
    maxTeamSize: number;
    minTeamSize: number;
}

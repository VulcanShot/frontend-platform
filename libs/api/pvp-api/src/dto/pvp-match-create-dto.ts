/**
 * Wire shape pairing one team from each side of a pairing into a match.
 */
export interface PvpMatchCreateDTO {
    pairingId: number;
    firstTeamId: number;
    secondTeamId: number;
}

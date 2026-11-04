/**
 * Wire shape of one match: the pairing of one team from each side over one sandbox.
 */
export interface PvpMatchDTO {
    id: number;
    pairingId: number;
    firstTeamId: number;
    secondTeamId: number;
    sandboxInstanceRefId: string | null;
}

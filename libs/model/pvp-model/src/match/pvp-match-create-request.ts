/**
 * Pairs one team from each side of a pairing into a match.
 */
export class PvpMatchCreateRequest {
    pairingId!: number;
    firstTeamId!: number;
    secondTeamId!: number;
}

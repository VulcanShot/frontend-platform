/**
 * Pairing of one team from each side of a {@link PvpPairing} into one match, and the sandbox the
 * two teams share once claimed.
 */
export class PvpMatch {
    id!: number;
    pairingId!: number;
    firstTeamId!: number;
    secondTeamId!: number;
    sandboxInstanceRefId: string | null = null;
}

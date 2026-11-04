import { PvpSideLobby } from './pvp-side-lobby';

/**
 * Both sides' lobbies of one pairing, plus the pairing's own shared configuration, in one payload.
 */
export class PvpPairingLobby {
    pairingId!: number;
    poolId: number | null = null;
    lobbyTimeoutSeconds!: number;
    maxTeamSize!: number;
    minTeamSize!: number;
    first!: PvpSideLobby;
    second!: PvpSideLobby;
}

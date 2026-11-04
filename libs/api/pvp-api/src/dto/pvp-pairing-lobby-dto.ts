import { PvpSideLobbyDTO } from './pvp-side-lobby-dto';

/**
 * Wire shape of both sides' lobbies of one pairing, plus the pairing's own configuration, in one
 * payload.
 */
export interface PvpPairingLobbyDTO {
    pairingId: number;
    poolId: number | null;
    lobbyTimeoutSeconds: number;
    maxTeamSize: number;
    minTeamSize: number;
    first: PvpSideLobbyDTO;
    second: PvpSideLobbyDTO;
}

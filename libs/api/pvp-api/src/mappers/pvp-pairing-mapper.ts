import { PvpPairing, PvpPairingCreateRequest } from '@crczp/pvp-model';
import { PvpPairingDTO } from '../dto/pvp-pairing-dto';
import { PvpPairingCreateDTO } from '../dto/pvp-pairing-create-dto';

export class PvpPairingMapper {
    static fromDTO(dto: PvpPairingDTO): PvpPairing {
        const pairing = new PvpPairing();
        pairing.id = dto.id;
        pairing.firstInstanceId = dto.firstInstanceId;
        pairing.secondInstanceId = dto.secondInstanceId;
        pairing.poolId = dto.poolId;
        pairing.lobbyTimeoutSeconds = dto.lobbyTimeoutSeconds;
        pairing.maxTeamSize = dto.maxTeamSize;
        pairing.minTeamSize = dto.minTeamSize;
        return pairing;
    }

    static toCreateDTO(request: PvpPairingCreateRequest): PvpPairingCreateDTO {
        return {
            firstInstanceId: request.firstInstanceId,
            secondInstanceId: request.secondInstanceId,
            lobbyTimeoutSeconds: request.lobbyTimeoutSeconds,
            maxTeamSize: request.maxTeamSize,
            minTeamSize: request.minTeamSize,
        };
    }
}

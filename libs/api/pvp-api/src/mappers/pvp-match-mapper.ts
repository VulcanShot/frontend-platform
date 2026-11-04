import { PvpMatch, PvpMatchCreateRequest } from '@crczp/pvp-model';
import { PvpMatchDTO } from '../dto/pvp-match-dto';
import { PvpMatchCreateDTO } from '../dto/pvp-match-create-dto';

export class PvpMatchMapper {
    static fromDTO(dto: PvpMatchDTO): PvpMatch {
        const match = new PvpMatch();
        match.id = dto.id;
        match.pairingId = dto.pairingId;
        match.firstTeamId = dto.firstTeamId;
        match.secondTeamId = dto.secondTeamId;
        match.sandboxInstanceRefId = dto.sandboxInstanceRefId;
        return match;
    }

    static toCreateDTO(request: PvpMatchCreateRequest): PvpMatchCreateDTO {
        return {
            pairingId: request.pairingId,
            firstTeamId: request.firstTeamId,
            secondTeamId: request.secondTeamId,
        };
    }
}

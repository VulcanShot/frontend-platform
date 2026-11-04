import { UserMapper } from '@crczp/training-api';
import { PvpPairingLobby, PvpSideLobby, PvpTeam } from '@crczp/pvp-model';
import { PvpPairingLobbyDTO } from '../dto/pvp-pairing-lobby-dto';
import { PvpSideLobbyDTO } from '../dto/pvp-side-lobby-dto';
import { PvpTeamDTO } from '../dto/pvp-team-dto';

export class PvpLobbyMapper {
    static teamFromDTO(dto: PvpTeamDTO): PvpTeam {
        const team = new PvpTeam();
        team.id = dto.id;
        team.name = dto.name;
        team.members = UserMapper.fromDTOs(dto.members);
        return team;
    }

    static sideFromDTO(dto: PvpSideLobbyDTO): PvpSideLobby {
        const side = new PvpSideLobby();
        side.usersQueue = UserMapper.fromDTOs(dto.usersQueue);
        side.teams = dto.teams.map((team) => PvpLobbyMapper.teamFromDTO(team));
        side.queueLastChanged = dto.queueLastChanged
            ? new Date(dto.queueLastChanged)
            : null;
        return side;
    }

    static pairingLobbyFromDTO(dto: PvpPairingLobbyDTO): PvpPairingLobby {
        const lobby = new PvpPairingLobby();
        lobby.pairingId = dto.pairingId;
        lobby.poolId = dto.poolId;
        lobby.lobbyTimeoutSeconds = dto.lobbyTimeoutSeconds;
        lobby.maxTeamSize = dto.maxTeamSize;
        lobby.minTeamSize = dto.minTeamSize;
        lobby.first = PvpLobbyMapper.sideFromDTO(dto.first);
        lobby.second = PvpLobbyMapper.sideFromDTO(dto.second);
        return lobby;
    }
}

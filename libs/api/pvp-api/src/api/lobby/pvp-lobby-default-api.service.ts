import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CRCZPHttpService } from '@crczp/api-common';
import { PortalConfig } from '@crczp/utils';
import { PvpPairingLobby, PvpSideLobby, PvpTeam, PvpUserTeamAssignment } from '@crczp/pvp-model';
import { PvpLobbyApi } from './pvp-lobby-api.service';
import { PvpTeamDTO } from '../../dto/pvp-team-dto';
import { PvpSideLobbyDTO } from '../../dto/pvp-side-lobby-dto';
import { PvpPairingLobbyDTO } from '../../dto/pvp-pairing-lobby-dto';
import { PvpUserTeamDTO } from '../../dto/pvp-user-team-dto';
import { PvpLobbyMapper } from '../../mappers/pvp-lobby-mapper';

/**
 * Default implementation of {@link PvpLobbyApi}, calling the real `/pvp-lobby` endpoints.
 */
@Injectable()
export class PvpLobbyDefaultApi extends PvpLobbyApi {
    private readonly http = inject(CRCZPHttpService);
    private readonly lobbyEndpointUri: string;

    constructor() {
        super();
        this.lobbyEndpointUri =
            inject(PortalConfig).basePaths.linearTraining + '/pvp-lobby';
    }

    getWaitingCount(accessToken: string): Observable<number> {
        return this.http
            .get<number>(
                `${this.lobbyEndpointUri}/${accessToken}/count`,
                'Read PvP side waiting count',
            )
            .execute();
    }

    getStartDate(accessToken: string): Observable<string> {
        return this.http
            .get<string>(
                `${this.lobbyEndpointUri}/${accessToken}/start-date`,
                'Read PvP pairing start date',
            )
            .asText()
            .execute();
    }

    getAssignedTeam(accessToken: string): Observable<PvpTeam> {
        return this.http
            .get<PvpTeamDTO>(
                `${this.lobbyEndpointUri}/${accessToken}/assigned-team`,
                'Read assigned PvP team',
            )
            .withMapper(PvpLobbyMapper.teamFromDTO)
            .execute();
    }

    getPairingLobby(pairingId: number): Observable<PvpPairingLobby> {
        return this.http
            .get<PvpPairingLobbyDTO>(
                `${this.lobbyEndpointUri}/pairing/${pairingId}`,
                'Read PvP pairing lobby',
            )
            .withMapper(PvpLobbyMapper.pairingLobbyFromDTO)
            .execute();
    }

    getInstanceLobby(instanceId: number): Observable<PvpSideLobby> {
        return this.http
            .get<PvpSideLobbyDTO>(
                `${this.lobbyEndpointUri}/${instanceId}`,
                'Read PvP side lobby',
            )
            .withMapper(PvpLobbyMapper.sideFromDTO)
            .execute();
    }

    createTeam(instanceId: number, name: string): Observable<PvpTeam> {
        return this.http
            .post<{ name: string }, PvpTeamDTO>(
                `${this.lobbyEndpointUri}/${instanceId}/team`,
                'Create PvP team',
            )
            .withBody({ name })
            .withMapper(PvpLobbyMapper.teamFromDTO)
            .execute();
    }

    disbandTeam(instanceId: number, teamId: number): Observable<void> {
        return this.http
            .delete<void>(
                `${this.lobbyEndpointUri}/${instanceId}/team/${teamId}`,
                'Disband PvP team',
            )
            .execute();
    }

    renameTeam(
        instanceId: number,
        teamId: number,
        name: string,
    ): Observable<string> {
        return this.http
            .put<{ name: string }, string>(
                `${this.lobbyEndpointUri}/${instanceId}/team/${teamId}/rename`,
                'Rename PvP team',
            )
            .withBody({ name })
            .asText()
            .execute();
    }

    acceptOntoRoster(
        instanceId: number,
        assignments: PvpUserTeamAssignment[],
    ): Observable<void> {
        return this.http
            .put<PvpUserTeamDTO[], void>(
                `${this.lobbyEndpointUri}/${instanceId}/roster`,
                'Accept players onto PvP roster',
            )
            .withBody(
                assignments.map((assignment) => ({
                    teamId: assignment.teamId,
                    userId: assignment.userId,
                })),
            )
            .execute();
    }

    addToQueue(instanceId: number, userIds: number[]): Observable<void> {
        return this.http
            .put<number[], void>(
                `${this.lobbyEndpointUri}/${instanceId}/queue`,
                'Add players to PvP queue',
            )
            .withBody(userIds)
            .execute();
    }

    moveBetweenTeamsOfSameInstance(
        instanceId: number,
        fromTeamId: number,
        toTeamId: number,
        playerIds: number[],
    ): Observable<void> {
        return this.http
            .put<number[], void>(
                `${this.lobbyEndpointUri}/${instanceId}/between-teams`,
                'Move players between PvP teams',
            )
            .withParams({ fromTeamId, toTeamId })
            .withBody(playerIds)
            .execute();
    }

    moveBetweenMatchTeams(
        matchId: number,
        fromTeamId: number,
        playerIds: number[],
    ): Observable<void> {
        return this.http
            .put<number[], void>(
                `${this.lobbyEndpointUri}/match/${matchId}/between-teams`,
                'Move players between PvP match teams',
            )
            .withParams({ fromTeamId })
            .withBody(playerIds)
            .execute();
    }
}

import { UserRefDTO } from '@crczp/training-api';
import { PvpTeamDTO } from './pvp-team-dto';

/**
 * Wire shape of one side's lobby: its queue and its teams.
 */
export interface PvpSideLobbyDTO {
    usersQueue: UserRefDTO[];
    teams: PvpTeamDTO[];
    /** ISO instant; null if no one has ever queued. */
    queueLastChanged: string | null;
}

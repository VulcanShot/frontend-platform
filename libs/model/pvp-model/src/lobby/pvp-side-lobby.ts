import { TrainingUser } from '@crczp/training-model';
import { PvpTeam } from './pvp-team';

/**
 * One PvP side's lobby: its queue and its teams.
 */
export class PvpSideLobby {
    usersQueue: TrainingUser[] = [];
    teams: PvpTeam[] = [];
    /** When the queue was last joined or left; null if no one has ever waited. */
    queueLastChanged: Date | null = null;
}

import { TrainingUser } from '@crczp/training-model';

/**
 * One PvP side's team and its roster.
 */
export class PvpTeam {
    id!: number;
    name!: string;
    members: TrainingUser[] = [];
}

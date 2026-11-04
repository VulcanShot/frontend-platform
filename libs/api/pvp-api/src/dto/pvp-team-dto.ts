import { UserRefDTO } from '@crczp/training-api';

/**
 * Wire shape of one PvP side's team and its roster.
 */
export interface PvpTeamDTO {
    id: number;
    name: string;
    members: UserRefDTO[];
}

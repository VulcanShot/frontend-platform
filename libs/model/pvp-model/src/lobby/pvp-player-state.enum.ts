/**
 * Where one trainee stands relative to a PvP side's queue, roster and match.
 */
export enum PvpPlayerStateEnum {
    Queued = 'queued',
    OnRoster = 'onRoster',
    WaitingForOpponent = 'waitingForOpponent',
    Playing = 'playing',
}

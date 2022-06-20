export enum Job {
    warrior =  1,
    archer = 2,
    sorcerer = 3,
    mage = 4,
    thief = 5,
}

export interface IPlayer {
    name?: string;
    level?: string;
    class?: Job;
}
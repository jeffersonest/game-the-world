import {IPlayer, Job} from "../../interfaces/player.interface";

class Player implements IPlayer{
    name?: string;
    level?: string;
    job?: Job;
}

export default Player
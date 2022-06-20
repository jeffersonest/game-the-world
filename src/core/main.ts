import Player from "./classes/player/player.class";
import {Job} from "./interfaces/player.interface";

type User = {
    name: string;
}

let user: Player = {
    name: "Jefferson Estevam"
}

user = {...user, name: "Jack", level: "01", job: Job.warrior}

console.log(user);
import {BaseEntity} from "./BaseEntity";

export class Ship extends BaseEntity {
    constructor(name, speed, capacity) {
        super(name);
        this.speed = speed;
        this.capacity = capacity;
        this.currentPilot = null;
    }

    assignPilot(pilot) {
        this.currentPilot = pilot;
        console.log(`${this.displayName} is set to be captain of ship: ${this.name}.`)
    }

    info() {
        console.log(`${this.displayName}. Speed: ${this.speed}, capacity: ${this.capacity}.
        Pilot: ${this.currentPilot ? this.currentPilot.displayName : "no pilot found"}.`);
    }
}
import { Pilot } from "./Pilot.js";

export class Smuggler extends Pilot {
    #stolenGoods = 0;

    constructor(name, experienceYears) {
        super(name, experienceYears);
    }


    improve() {
        this.updateRating();
        this.#stolenGoods += 1;
        console.log(`${this.displayName} улучшил навыки и украл ещё немного товара!`);
    }

    get stolenGoods() {
        return this.#stolenGoods;
    }
}

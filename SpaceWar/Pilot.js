import { BaseEntity } from './BaseEntity.js';


export class Pilot extends BaseEntity {
    #rating = 1;

    constructor(name, experienceYears) {
        super(name);
        this.experienceYears = experienceYears;
    }

    get rating() {
        return this.#rating + this.experienceYears * 0.5;
    }

    updateRating() {
        this.#rating += 0.2;
    }

    introduceRating() {
        console.log(
            `${this.displayName} - пилот с опытом ${this.experienceYears} лет, 
            и его рейтинг: ${this.rating.toFixed(1)}`
        );
    }


    improve() {
        this.updateRating();
        console.log(`${this.displayName} улучшает свои навыки.`);
    }
}

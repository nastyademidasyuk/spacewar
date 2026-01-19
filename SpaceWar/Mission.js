import { BaseEntity } from "./BaseEntity";
import { MissionControl } from "./MissionControl";

export class Mission extends BaseEntity {
    constructor(name, ship, maxWeight = 200) {
        super(name);
        this.ship = ship;
        this.cargos = [];
        this.isCompleted = false;
        this.reward = 0;
        this.maxWeight = maxWeight;
    }

    addCargo(cargo) {
        const currentWeight = this.cargos.reduce((sum, c) => sum + c.weight, 0);
        const newTotalWeight = currentWeight + cargo.weight;


        if (newTotalWeight > this.maxWeight) {
            MissionControl.genericLog.call(this, "[ERROR] Mission сликшом тяжелая!");
            return;
        }


        if (newTotalWeight > this.ship.capacity) {
            MissionControl.genericLog.call(this, "[ERROR] Вместимость корабля превышена!");
            return;
        }


        this.cargos.push(cargo);
        console.log("Груз добавлен!");
    }

    calcReward() {
        const values = this.cargos.map(x => x.value);
        const maxValue = values.length ? Math.max(...values) : 0;
        const sum = values.reduce((a, b) => a + b, 0);

        this.reward = sum + maxValue;
        return this.reward;
    }

    complete() {
        this.isCompleted = true;

        const pilot = this.ship.currentPilot;

        if (pilot) {
            pilot.updateRating();
        } else {
            console.log("Как мы  выполним эту миссию без пилота?");
        }
    }

    logStatus(prefix = "") {
        console.log(
            `${prefix}Mission "${this.name}": ship = ${this.ship.name},
        pilot - ${this.currentPilot ? this.currentPilot.displayName : "no pilot found"},
        cargos: ${this.cargos.length}, and received in total: ${this.reward}`
        );
    }
}

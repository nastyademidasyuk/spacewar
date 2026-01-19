export class Duel {
    constructor(pilotA, pilotB) {
        this.pilotA = pilotA;
        this.pilotB = pilotB;

        this.energyA = 100;
        this.energyB = 100;

        console.log(`начало дуэля ${pilotA.displayName} с ${pilotB.displayName}`);
    }


    attack(attacker, defender, defenderEnergy, attackerIsSmuggler) {
        const damage = Math.floor(Math.random() * 16) + 5;
        defenderEnergy -= damage;

        console.log(
            `${attacker.displayName} ебашит ${damage}  (у врага осталось ${defenderEnergy})`
        );


        if (attackerIsSmuggler) {
            const chance = Math.random();
            if (chance < 0.2) {
                defenderEnergy -= 5;
                console.log(` ${attacker.displayName} слямзил 5 энергии!`);
            }
        }

        return defenderEnergy;
    }

    start() {
        console.log("Бой начинается...\n");


        const attackA = this.attack.bind(
            this,
            this.pilotA,
            this.pilotB,
        );

        const attackB = this.attack.bind(
            this,
            this.pilotB,
            this.pilotA,
        );


        const isSmugglerA = this.pilotA.constructor.name === "Smuggler";
        const isSmugglerB = this.pilotB.constructor.name === "Smuggler";


        while (this.energyA > 0 && this.energyB > 0) {


            this.energyB = this.attack(
                this.pilotA,
                this.pilotB,
                this.energyB,
                isSmugglerA
            );

            if (this.energyB <= 0) break;


            this.energyA = this.attack(
                this.pilotB,
                this.pilotA,
                this.energyA,
                isSmugglerB
            );

            console.log("----------------------------");
        }

        console.log("\n Бой окончен");

        if (this.energyA <= 0 && this.energyB <= 0) {
            console.log("Ничья");
        } else if (this.energyA > 0) {
            console.log(`Победитель: ${this.pilotA.displayName}`);
        } else {
            console.log(`Победитель: ${this.pilotB.displayName}`);
        }
    }
}

export class MissionControl {
    static missions = [];

    static registerMission(mission) {
        this.missions.push(mission);
    }

    static launchWithDisplay(mission, delayMs) {
        const boundLog = mission.logStatus.bind(mission, "[LUNCH]");
        console.log(`Миссия началась с задержки. ${delayMs}.`);
        setTimeout(() => {
            boundLog();
            this.runMission(mission);
        }, delayMs);
    }

    static runMission(mission) {
        if (!mission.ship.currentPilot) {
            console.log("пилота не нашлось!");
            return;
        }

        const steps = [
            MissionControl._stepTakeOff,
            MissionControl._stepFly,
            MissionControl._stepDeliver,
            MissionControl._stepReturn,
        ];

        steps.forEach((fn, index) => {
            fn.call(this, mission, index + 1);
        });

        mission.calcReward();
        mission.complete();
    }

    static _stepTakeOff(mission, stepNumber) {
        console.log(`Step ${stepNumber}: 
        Наш "${mission.ship.name} с пилотом "${mission.ship.currentPilot} начинает!`);
    }

    static _stepFly(mission, stepNumber) {
        console.log(`Step ${stepNumber}: 
        Наш "${mission.ship.name} летит со скоростью ${mission.ship.speed}!`);
    }

    static _stepDeliver(mission, stepNumber) {
        (function (m, s) {
            console.log(`Step ${s}: Adding ${m.cargos.length} получателю.`);
        }).apply(null, [mission, stepNumber]);
    }

    static _stepReturn(mission, stepNumber) {
        console.log(`Step ${stepNumber}: 
        Наш "${mission.ship.name} с пилотом "${mission.ship.currentPilot} возвращается!`);
    }

    static genericLog(prefix) {
        console.log(`${prefix} ${this.displayName || this.name || "Something"} logging.`)
    }
}

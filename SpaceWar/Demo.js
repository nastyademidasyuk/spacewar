import {Pilot} from "./Pilot";
import {Ship} from "./Ship";
import {Cargo} from "./Cargo";
import {Mission} from "./Mission";
import {MissionControl} from "./MissionControl";

const pilotA = new Pilot("алекс", 3);
const pilotB = new Pilot("алинка", 5);

pilotA.introduceRating();
pilotA.introduceRating.call(pilotB);

const falcon = new Ship("Falcon", 80, 100);
const gourme = new Ship("Gourme", 60, 150);

falcon.assignPilot(pilotA);
gourme.assignPilot(pilotB);

falcon.info();
gourme.info();

const cargo1 = new Cargo("Relics", 40 ,500);
const cargo2 = new Cargo("Containers", 30 ,300);
const cargo3 = new Cargo("Mails", 50 ,200);
const cargo4 = new Cargo("Lights", 200 ,800);

cargo1.info();
cargo2.info();
cargo3.info();
cargo4.info();

const missionAlpha = new Mission("Alpha", falcon);
MissionControl.registerMission(missionAlpha);
missionAlpha.addCargo(cargo1);
missionAlpha.addCargo(cargo2);
missionAlpha.addCargo(cargo3);
missionAlpha.addCargo(cargo4);

const logAlpha = missionAlpha.logStatus.bind(missionAlpha, "[DEBUG]");
logAlpha();

MissionControl.genericLog.call(pilotA, "[Pilot]");
MissionControl.genericLog.apply(missionAlpha, "[<MISSION>]");
MissionControl.launchWithDisplay(missionAlpha, 500);

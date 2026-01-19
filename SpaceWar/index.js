import { Pilot } from "./Pilot.js";
import { Smuggler } from "./Smuggler.js";
import { Duel } from "./Duel.js";


const pilotA = new Pilot("Alex", 5);
const pilotB = new Pilot("Anna", 3);


const pilotC = new Smuggler("Rick", 4);


pilotA.introduceRating();
pilotB.introduceRating();
pilotC.introduceRating();


const duel = new Duel(pilotA, pilotC);
duel.start();

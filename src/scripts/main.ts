import { log } from "console";

import { Main, NameMain, Paquet, PlayersMain, PlayersName,PlayersValue, Value, newPioche } from "helpers/cartes";
import logger from "utils/logger";


const P = Paquet(1);
const M = Main(P);
const Scnd = newPioche(P,M);
const N = NameMain(M);
const V = Value(M);
const J = PlayersMain(P,3);
const JN = PlayersName(J);
const JV = PlayersValue(J);


logger.info(P);
logger.info(M);
logger.info(N);
logger.info(V);
logger.info(J);
console.log(J);
console.log(JN);
console.log(JV);
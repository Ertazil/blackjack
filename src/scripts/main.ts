import { log } from "console";

import { Main, NameMain, Paquet, Value, newPioche } from "helpers/cartes";
import logger from "utils/logger";


const P = Paquet(1);
const M = Main(P);
const Scnd = newPioche(P,M);
const N = NameMain(M);
const V = Value(M);




logger.info(P);
logger.info(M);
logger.info(N);
logger.info(V);
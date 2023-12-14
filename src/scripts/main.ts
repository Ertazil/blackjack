import { log } from "console";

import { Main, Name, Paquet, Pioche, Value } from "helpers/cartes";
import logger from "utils/logger";


const P = Paquet(1);


const M = Main(P);
const N: string[] = [Name(M[0]), Name(M[1])];
const V = Value(M);

logger.info(P);

logger.info(N);
logger.info(M);
logger.info(V);
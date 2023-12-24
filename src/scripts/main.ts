import { log } from "console";

import * as bot from "helpers/bot";
import * as cartes from "helpers/cartes";
import * as partie from "helpers/partie";
import logger from "utils/logger";


const res = partie.BotvsBot(2);
console.log(res);
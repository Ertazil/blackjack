import { paquet, playersMain, playersValue, playersName, newPioche } from "helpers/cartes";
import { victoire } from "helpers/partie";
import { bot0 } from "helpers/bot";

import * as readline from 'readline';

async function actionjoueur(input: number): Promise<string[]> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let reponse: string = 'o';

    const deck = paquet(6);
    const hands = playersMain(deck, input);
    let handsName = playersName(hands);
    let handsValue = playersValue(hands);

    while (reponse.toLowerCase() === 'o') {

        console.log(handsName);
        console.log(handsValue[1]);

        reponse = await questionAsync(rl, "Voulez-vous piocher une carte ? (o/n): ");
        if(reponse === "o"){
            newPioche(deck,hands[1]);
            handsName = playersName(hands);
            handsValue = playersValue(hands);
        }
    }

    while (handsValue[0] < 17) {
        bot0(deck,hands[1])
    }

    console.log(handsName);
    console.log(handsValue);
    rl.close();
    return victoire(handsValue);
}

function questionAsync(rl: readline.Interface, question: string): Promise<string> {
    return new Promise<string>((resolve) => {
        rl.question(question, (reponse) => {
            resolve(reponse);
        });
    });
}

export async function exempleUtilisation() {
    const resultatFinal = await actionjoueur(2);
    console.log("Résultat final:", resultatFinal);
}



import { paquet, playersMain, playersValue, playersName, newPioche } from "helpers/cartes";
import { victoire } from "helpers/partie";
import { bot0 } from "helpers/bot";

import * as readline from 'readline';

// /**
//  * permet de jouer une manche
//  * @param input nombre de joueur
//  * @param deck le paquet de carte
//  * @returns le gagnant de la manche
//  */
// async function actionjoueur(input: number,deck:number[]): Promise<string[]> {
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });

//     let reponse: string = 'o';

//     const hands = playersMain(deck, input);
//     let handsName = playersName(hands);
//     let handsValue = playersValue(hands);

//     while (reponse.toLowerCase() === 'o') {

//         console.log(handsName);
//         console.log(handsValue);

//         reponse = await questionAsync(rl, "Voulez-vous piocher une carte ? (o/n): ");

//         if(reponse === "o"){
//             newPioche(deck,hands[1]);
//             handsName = playersName(hands);
//             handsValue = playersValue(hands);
//         }

//         if(handsValue[1] > 21){
//             console.log(playersName(hands))
//             console.log(handsValue);
//             rl.close();
//             return victoire(handsValue);
//         }
//     }

//     let res = handsValue[0];

//     while (res < 17) {
//         res = bot0(deck, hands[0]);
//         handsValue[0] = res;
//     }

//     console.log(playersName(hands))
//     console.log(handsValue);
//     rl.close();
//     return victoire(handsValue);
// }

async function fullGame(): Promise<number> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let reponse2: string = 'o';

    const deck = paquet(6);
    let id = 0;

    while (reponse2.toLowerCase() === 'o') {
        //await actionjoueur(2,deck);

        let reponse: string = 'o';

        const hands = playersMain(deck, 2);
        let handsName = playersName(hands);
        let handsValue = playersValue(hands);

        while (reponse.toLowerCase() === 'o') {

            console.log(handsName);
            console.log(handsValue);

            reponse = await questionAsync(rl, "Voulez-vous piocher une carte ? (o/n): ");

            if (reponse === "o") {
                newPioche(deck, hands[1]);
                handsName = playersName(hands);
                handsValue = playersValue(hands);
            }

            if (handsValue[1] > 21) {
                reponse = 'n';
            }
        }

        let res = handsValue[0];

        while (res < 17) {
            res = bot0(deck, hands[0]);
            handsValue[0] = res;
        }

        console.log(handsName);
        console.log(handsValue);
        console.log(victoire(handsValue));

        id++;
        reponse2 = await questionAsync(rl, "Voulez-vous rejouer ? (o/n): ");
    }


    rl.close();
    return id;
}

function questionAsync(rl: readline.Interface, question: string): Promise<string> {
    return new Promise<string>((resolve) => {
        rl.question(question, (reponse) => {
            resolve(reponse);
        });
    });
}

export async function exempleUtilisation() {
    const resultatFinal = await fullGame();
    console.log("Résultat final:", resultatFinal);
}



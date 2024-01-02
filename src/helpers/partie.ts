import * as bot from "helpers/bot";
import * as cartes from "helpers/cartes";


export function tableauresultat(input: number) {  // nombre de joueur humain
    const playerstab: { [nom: number]: string; } = { 0: "bot win" };

    for (let i = 1; i <= input; i++) {
        const player = `player ${i} win`;
        const playernumber = i;

        playerstab[playernumber] = player;
    }
    playerstab[-1] = "everybody lose";

    return playerstab;
}

export function generertableau(input: number) {  // nombre de joueur humain
    const playerstab: number[] = [];

    for (let i = 0; i <= input; i++) {
        playerstab.push(i);
    }

    return playerstab;
}

/**
 * donne le vainqueur d'une manche
 * @param tab les valeurs des mains des joueur
 * @returns le joueur gagnant
 */
export function victoire(tab: number[]) {  
    let playertab: { [id: number]: string; } = {};
    playertab = tableauresultat(tab.length - 1);
    let winnersid: number[] = [-1];
    let winners: string[] = [];
    let winner = 0;

    for (let i = 0; i <= tab.length; i++) {
        if (tab[i] > winner && tab[i] <= 21) {
            winner = tab[i];
            winners = [];
            winnersid = [];
        }

        if (tab[i] == winner && tab[i] <= 21) {
            winnersid.push(i);
        }
    }

    for (const win of winnersid) {
        winners.push(playertab[win]);
    }

    return winners;
}

export function botvsbot(input: number) {  // nombre de joueur
    const paquet = cartes.paquet(1);
    const botmain = cartes.playersMain(paquet, input);
    const botmainName = cartes.playersName(botmain);
    const botmainValue = cartes.playersValue(botmain);

    let res = botmainValue[0];
    let res1 = botmainValue[1];

    console.log(botmainValue);
    while (res < 17) {
        res = bot.bot0(paquet, botmain[0]);;
        botmainValue[0] = res;
    }

    while (res1 < 15) {
        res1 = bot.bot1(paquet, botmain[1]);;
        botmainValue[1] = res1;
    }

    console.log(botmainValue);
    return victoire(botmainValue);
}
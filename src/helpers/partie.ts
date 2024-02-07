import { bot0, bot1 } from "helpers/bot";
import { paquet, playersMain , playersValue, playersName } from "helpers/cartes";


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
    let plushautemain = 0;

    for (let i = 0; i <= tab.length; i++) {
        if (tab[i] == plushautemain && tab[i] <= 21) {
            winnersid.push(i);
            winners.push("split");
        }

        if (tab[i] > plushautemain && tab[i] <= 21) {
            plushautemain = tab[i];
            winners = [];
            winnersid = [];
            winnersid.push(i);
        }
    }

    for (const win of winnersid) {
        winners.push(playertab[win]);
    }

    return winners;
}

export function botvsbot(input: number) {  // nombre de joueur
    const paquets = paquet(1);
    const allmain = playersMain(paquets, input);
    //const allmainName = playersName(allmain);  servira probablement lorsque qu'il faurdra montrer leur main aux joueurs
    const allmainValue = playersValue(allmain);

    let res = allmainValue[0];
    let res1 = allmainValue[1];

    while (res < 17) {
        res = bot0(paquets, allmain[0]);;
        allmainValue[0] = res;
    }

    while (res1 < 15) {
        res1 = bot1(paquets, allmain[1]);;
        allmainValue[1] = res1;
    }

    return [playersName(allmain), allmainValue,victoire(allmainValue)];
}
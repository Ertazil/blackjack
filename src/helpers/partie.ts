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

export function victoire(tab: number[]) {  // tableau des valeur des mains
    let playertab: { [id: number]: string; } = {};
    playertab = tableauresultat(tab.length - 1);
    let winnersid: number[] = [-1];
    let winners: string[] = [];
    let winner = 0;

    for (let i = 0; i <= tab.length; i++) {
        if (tab[i] > winner  && tab[i] <= 21) {
            winner = tab[i];
            winners = [];
            winnersid = [];
        }

        if (tab[i] == winner  && tab[i] <= 21) {
            winnersid.push(i);
        }
    }

    for (const win of winnersid){
        winners.push(playertab[win]);
    }

    return winners;
}

export function BotvsBot(input: number) {  // nombre de joueur
    const paquet = cartes.Paquet(1);
    const botmain = cartes.PlayersMain(paquet, input);
    const botmainvalue = cartes.PlayersValue(paquet,input);
    let res = botmainvalue[0];

    while(res < 17){
        res = bot.Bot0(paquet, botmain[0]);;
    }

    console.log(botmainvalue);
    return victoire(botmainvalue);
}
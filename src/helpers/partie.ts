import * as bot from "helpers/bot";
import * as cartes from "helpers/cartes";

/*
function generertableaudesjoueur(input: number) {  // nombre de joueur humain
    const playerstab: { [nom: string]: number; } = { "bot": 0 };

    for (let i = 1; i <= input; i++) {
        const player = `player ${i}`;
        const playernumber = i;

        playerstab[player] = playernumber;
    }

    return playerstab;
}
*/

export function generertableaudesjoueur(input: number) {  // nombre de joueur humain
    const playerstab: { [nom: number]: string; } = { 0: "bot" };

    for (let i = 1; i <= input; i++) {
        const player = `player ${i}`;
        const playernumber = i;

        playerstab[playernumber] = player;
    }
    playerstab[-1] = "all lose";

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
    playertab = generertableaudesjoueur(tab.length - 1);
    let winnerid = -1;
    let winner = 0;


    for (let i = 0; i <= tab.length; i++) {
        if (tab[i] >= winner  && tab[i] <= 21) {
            winner = tab[i];
            winnerid = i;
        }
    }

    return playertab[winnerid];
}

export function BotvsBot(input: number) {  // nombre de joueur
    const playerstab = generertableau(input - 1);
    const paquet = cartes.Paquet(6);
    const botmain = cartes.PlayersMain(paquet, input);
    const botmainvalue = cartes.PlayersValue(paquet,input);

    for (const val of playerstab) {
        bot.Bot0(botmainvalue[val], paquet, botmain[val]);
    }
    console.log(botmainvalue);

    return victoire(botmainvalue);
}
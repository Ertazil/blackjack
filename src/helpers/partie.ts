import * as bot from "helpers/bot";
import * as cartes from "helpers/cartes";


function generertableaudesjoueur(input: number) {  // nombre de joueur humain
    const playerstab: { [nom: string]: number; } = { "bot": 0 };

    for (let i = 1; i <= input; i++) {
        const player = `player ${i}`;
        const playernumber = i;

        playerstab[player] = playernumber;
    }

    return playerstab;
}

export function BotvsBot(input: number) {  // nombre de joueur
    const playertab = generertableaudesjoueur(input - 1);
    const paquet = cartes.Paquet(6);
    const botmain = cartes.PlayersMain(paquet, input);
    const botmainvalue = cartes.PlayersValue(botmain);

    bot.Bot0(botmainvalue[0], paquet, botmain[0]);
    console.log(botmain);

    return botmainvalue;
}
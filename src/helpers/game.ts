import { paquet, playersMain, playersValue, playersName, newPioche } from "helpers/cartes";


/**
 * met en place le plateau en fonction du nombre de joueurs
 * @param input nbr de joueur
 * @returns un tableau des mains brutes des joueurs
 */
export function set(input: number) {
    const deck = paquet(6);
    const starthands = playersMain(deck, input);
    const starthandsValue = playersValue(starthands);
    const starthandsName = playersName(starthands);

    return [deck, starthands, starthandsName, starthandsValue];
}

/**
 *
 * @param input choix du joueur
 * @returns un ordre ?
 */
function choices(input: string,) {
    const start = set(2);

    if (input == "pioche"){
        newPioche(deck, start[3][0]);
    }
}
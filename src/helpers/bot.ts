import * as cartes from "helpers/cartes";

/**
 * fait piocher une carte si le total est inférieur a 17
 * @param tab1 le paquet
 * @param tab2 la valeur de la main du bot
 * @returns la nouvelle valeur de la main du bot
 */
export function bot0(tab1: number[], tab2: number[]) {
    if (cartes.value(tab2) < 17) {
        cartes.newPioche(tab1, tab2);
    }

    return cartes.value(tab2);
}

export function bot1(tab1: number[], tab2: number[]) {
    if (cartes.value(tab2) < 15) {
        cartes.newPioche(tab1, tab2);
    }

    return cartes.value(tab2);
}
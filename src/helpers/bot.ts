import * as cartes from "helpers/cartes";


export function Bot0(input: number, tab1: number[], tab2: number[]){  // valeur de la main, paquet, main
    if (input <= 15 ){
        cartes.newPioche(tab1,tab2);
    }

    return cartes.Value(tab2);
}

export function Bot1(input: number, tab1: number[], tab2: number[]){  // valeur de la main, paquet, main
    if (input <= 16 ){
        cartes.newPioche(tab1,tab2);
    }

    return cartes.Value(tab2);
}
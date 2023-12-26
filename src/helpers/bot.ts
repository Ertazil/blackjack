import * as cartes from "helpers/cartes";


export function Bot0(tab1: number[], tab2: number[]){  // paquet, main
    if (cartes.Value(tab2) < 17 ){
        cartes.newPioche(tab1,tab2);
    }

    return cartes.Value(tab2);
}
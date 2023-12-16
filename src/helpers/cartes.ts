
export function Paquet(input: number) {
    const lng = input * 52;
    const deck: number[] = [];

    for (let i = 0; i < lng; i++) {
        deck.push(i);
    }

    return deck;
}

export function Main(tab: number[]){
    const main: number[] = [Pioche(tab),Pioche(tab)];

    return main;
}

export function NameCarte(input: number) {
    //détermine la valeur
    const buche: { [num: number]: string } = {
        0: "10",
        10: "J",
        11: "Q",
        12: "K",
    };

    const num = (input % 13 > 9 || input % 13 === 0) ? buche[input % 13] : (input % 13).toString();

    //Détermine la famille
    let fam = "H";      //Heart

    if (input % 52 <= 12) {
        fam = "S";      //Spade
    } else if (input % 52 <= 25) {
        fam = "D";      //Diamond
    } else if (input % 52 <= 38) {
        fam = "C";      //Clover
    }

    return num + fam;
}

export function NameMain(tab: number[]){
    const main: string[] = [];

    for(const nbr of tab){
        main.push(NameCarte(nbr));
    }

    return main;
}

export function Pioche(tab: number[]){
    const pick = Math.floor(Math.random() * tab.length);
    //const main: number[] = [];

    const main = tab[pick];
    tab.splice(pick,1);

    return main;
}

export function newPioche(tab1:number[],tab2:number[]){
    return tab2.push(Pioche(tab1));
}



export function Value(tab:number[]){
    let sum = 0;
    const buche: { [num: number]: number } = {
        0: 10,
        11: 10,
        12: 10,
    };

    for(const nbr of tab){
        if(nbr === 1){
            sum += sum > 10  ? 1 : 11;
        } else {
            sum += (nbr % 13 > 10 || nbr % 13 === 0) ? buche[nbr % 13] : (nbr % 13);
        }
    }

    return sum;
}



/**
 * créer un nbr defini de paquet
 * @param input nombre de paquets
 * @returns un tableau de nombre
 */
export function Paquet(input: number) {  // nombre de paquet
    const lng = input * 52;
    const deck: number[] = [];

    for (let i = 0; i < lng; i++) {
        deck.push(i);
    }

    return deck;
}

export function Pioche(tab: number[]) {  // paquet
    const pick = Math.floor(Math.random() * tab.length);
    const main = tab[pick];

    tab.splice(pick, 1);

    return main;
}

export function newPioche(tab1: number[], tab2: number[]) {  // paquet, main
    return tab2.push(Pioche(tab1));
}

export function Main(tab: number[]) {  // paquet
    const main: number[] = [Pioche(tab), Pioche(tab)];

    return main;
}

export function NameCarte(input: number) {  // numéro de carte
    //détermine la valeur
    const buche: { [num: number]: string; } = {
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

export function NameMain(tab: number[]) {  // une main
    const main: string[] = [];

    for (const nbr of tab) {
        main.push(NameCarte(nbr));
    }

    return main;
}

export function Value(tab: number[]) {  // une main
    let sum = 0;
    const buche: { [num: number]: number; } = {
        0: 10,
        11: 10,
        12: 10,
    };

    for (const nbr of tab) {
        if (nbr % 13 === 1) {
            sum += sum > 10 ? 1 : 11;
        } else {
            sum += (nbr % 13 > 10 || nbr % 13 === 0) ? buche[nbr % 13] : (nbr % 13);
        }
    }

    return sum;
}

export function PlayersMain(tab: number[], input: number) {  // paquet, nombre de joueur
    let i = 0;
    const players: number[][] = [];

    while (i < input) {
        players.push(Main(tab));
        i++;
    }

    return players;
}

export function PlayersName(tab: number[], input: number) {  // paquet
    const playersmain: string[][] = [];

    for (const nbr of PlayersMain(tab, input)) {
        playersmain.push(NameMain(nbr));
    }

    return playersmain;
}

export function PlayersValue(tab: number[], input: number) {  // tableau des mains
    const playersvalue: number[] = [];

    for (const nbr of PlayersMain(tab, input)) {
        playersvalue.push(Value(nbr));
    }

    return playersvalue;
}
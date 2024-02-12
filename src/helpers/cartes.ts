/**
 * créer un nbr defini de paquet
 * @param input nombre de paquets
 * @returns un tableau de nombre
 */
export function paquet(input: number) {
    const lng = input * 52;
    const deck: number[] = [];

    for (let i = 0; i < lng; i++) {
        deck.push(i);
    }

    return deck;
}

/**
 * pioche une carte dans le paquet
 * @param tab paquet
 * @returns un numéro équivalent à une carte
 */
function pioche(tab: number[]) {
    const pick = Math.floor(Math.random() * tab.length);
    const main = tab[pick];

    tab.splice(pick, 1);

    return main;
}

/**
 * Pioche une carte pour la mettre dans la main d'un joueur
 * @param tab1 le paquet
 * @param tab2 une main de numéro
 * @returns la nouvelle valeur de la main du joueur
 */
export function newPioche(tab1: number[], tab2: number[]) {
    return tab2.push(pioche(tab1));
}

/**
 * créer une main en piochant 2 cartes
 * @param tab le paquet
 * @returns une main de 2 numéros
 */
function main(tab: number[]) {
    const main: number[] = [pioche(tab), pioche(tab)];

    return main;
}

/**
 * donne la famille et le chiffre associer au numéro d'une carte
 * @param input un numéro
 * @returns une carte
 */
function nameCarte(input: number) {
    //détermine la valeur
    const buche: { [num: number]: string; } = {
        0: "10",
        10: "J",
        11: "Q",
        12: "K",
    };

    const num = (input % 13 > 9 || input % 13 === 0) ? buche[input % 13] : (input % 13).toString();

    //Détermine la famille  ♣️ ♥️ ♦️ ♠️
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

/**
 * donne la famille et le chiffre associer aux numéros d'une main
 * @param tab une main
 * @returns une main de 2 carte
 */
function nameMain(tab: number[]) {
    const main: string[] = [];

    for (const nbr of tab) {
        main.push(nameCarte(nbr));
    }

    return main;
}

/**
 * donne la valeur total d'une main
 * @param tab une main de carte
 * @returns la valeur de cette main
 */
export function value(tab: number[]) {
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

/**
 * créer un nombre de main en fonction du nombre de joueur
 * @param tab le paquet
 * @param input le nombre de joueur
 * @returns les mains des différents joueur
 */
export function playersMain(tab: number[], input: number) {
    let i = 0;
    const players: number[][] = [];

    while (i < input) {
        players.push(main(tab));
        i++;
    }

    return players;
}

/**
 * converti les mains de numéro en carte
 * @param tab les mians des joueurs en numéros
 * @returns les mains des joueur en cartes
 */
export function playersName(tab: number[][]) {
    const playersmain: string[][] = [];

    for (const nbr of tab) {
        playersmain.push(nameMain(nbr));
    }

    return playersmain;
}

/**
 * donne la valeur de la main de chaque joueur
 * @param tab les mains des joueur en numéros
 * @returns la valeur des mains des joueurs
 */
export function playersValue(tab: number[][]) {
    const playersvalue: number[] = [];

    for (const nbr of tab) {
        playersvalue.push(value(nbr));
    }

    return playersvalue;
}
import Luta from "./Luta";
import Lutador from "./Lutador";

let lutador1 = new Lutador(
    'Pretty Boy',
    'França',
    68.9,
    1.75,
    31,
    11,
    3,
    1,
    'a'
)

let lutador2 = new Lutador(
    'Putscript',
    'Brasil',
    57.8,
    1.68,
    29,
    14,
    2,
    3,
    'a'
)

let lutador3 = new Lutador(
    'Snapshadow',
    'EUA',
    80.9,
    1.65,
    35,
    12,
    2,
    1,
    'a'
)

let lutador4 = new Lutador(
    'Dead Code',
    'Austrália',
    81.4,
    1.93,
    28,
    13,
    0,
    2,
    'a'
)

let lutador5 = new Lutador(
    'Uftocobol',
    'Brasil',
    119.3,
    1.70,
    37,
    5,
    4,
    3,
    'a'
)

let lutador6 = new Lutador(
    'Nerdaard',
    'EUA',
    105.7,
    1.81,
    30,
    12,
    2,
    4,
    'a'
)

let UEC01 = new Luta(lutador1, lutador6, 3, false)
UEC01.marcarLuta(lutador1, lutador2)
UEC01.lutar()
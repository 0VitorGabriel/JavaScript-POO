import Arara from "./Arara.";
import Ave from "./Ave";
import Cachorro from "./Cachorro";
import Canguru from "./Canguru";
import Cobra from "./Cobra";
import GoldFish from "./GoldFish";
import Mamifero from "./Mamifero";
import Peixe from "./Peixe";
import Reptil from "./Reptil";
import Tartaruga from "./Tartaruga";

const mamifero1: Mamifero = new Mamifero(35.3, 12, 4, 'cinza')

const reptil1: Reptil = new Reptil(35.3, 12, 4, 'cinza')

const peixe1: Peixe = new Peixe(35.3, 12, 4, 'cinza')

const ave1: Ave = new Ave(35.3, 12, 4, 'cinza')

const tartarua1: Tartaruga = new Tartaruga(35.3, 12, 4, 'cinza')

const cachorro1: Cachorro = new Cachorro(35.3, 12, 4, 'cinza')

const cobra1: Cobra = new Cobra(35.3, 12, 4, 'cinza')

const arara1: Arara = new Arara(35.3, 12, 4, 'cinza')

const goldfish: GoldFish = new GoldFish(35.3, 12, 4, 'cinza')

const canguru1: Canguru = new Canguru(35.3, 12, 4, 'cinza')

canguru1.locomover()

tartarua1.locomover()

cachorro1.locomover()
cachorro1.emitirSom()

cobra1.locomover()

arara1.locomover()

goldfish.locomover()

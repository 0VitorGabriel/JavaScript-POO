import Mamifero from "./Mamifero";

class Canguru extends Mamifero {
    public override locomover(): void {
        console.log('saltando')
    }

    public usarBolsa(): void {
        console.log('usando a bolsa')
    }
}

export default Canguru
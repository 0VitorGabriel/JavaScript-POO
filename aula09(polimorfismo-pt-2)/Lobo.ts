import Mamifero from "./Mamifero";

class Lobo extends Mamifero {
    public override emitirSom(): void {
        console.log('Auuuu')
    }
}

export default Lobo
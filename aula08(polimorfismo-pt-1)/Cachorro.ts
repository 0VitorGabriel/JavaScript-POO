import Mamifero from "./Mamifero";

class Cachorro extends Mamifero {
    public override emitirSom(): void {
        console.log('au au')
    }
}

export default Cachorro
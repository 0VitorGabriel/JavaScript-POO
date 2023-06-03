import Lobo from "./Lobo";

class Cachorro extends Lobo {
    public override emitirSom(): void {
        console.log('au au au')
    }

    public reagirFrase(frase: String): void {
        if (frase.toLowerCase() == 'toma comida' || frase.toLowerCase() == 'ola') {
            console.log('abanar e latir')
        } else {
            console.log('rosnar')
        }
    }

    public reagirHora(hora: Number, mim: Number): void {
        if (Number(hora) < 12) {
            console.log('abanar')
        } else if (Number(hora) >= 18) {
            console.log('ignorar')
        } else {
            console.log('abanar e latir')
        }
    }

    public reagirDono(dono: Boolean): void {
        if (dono) {
            console.log('abanar')
        } else {
            console.log('rosnar e latir')
        }
    }

    public reagirIdade(idade: Number, peso: Number): void {
        if (Number(idade) < 5) {
            if (Number(peso) < 10) {
                console.log('abanar')
            } else {
                console.log('latir')
            }
        } else {
            if (Number(peso) < 10) {
                console.log('rosnar')
            } else [
                console.log('ignorar')
            ]
        }
    }
}

export default Cachorro
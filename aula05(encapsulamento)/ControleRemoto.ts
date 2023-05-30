import Controlador from "./Controlador"

class ControleRemoto implements Controlador{
    private _volume: Number
    private _ligado: Boolean
    private _tocando: Boolean

    constructor() {
        this._volume = 50
        this._ligado = false
        this._tocando = false
    }

    ligar(): void {
        this.ligado = true
    }

    desligar(): void {
        this.ligado = false
    }

    abrirMenu(): void {
        if (this.ligado) {
            console.log('--- MENU ---')
            console.log('está ligado? ' + this.ligado)
            console.log('está tocando? ' + this.tocando)
            console.log('volume: ' + this.volume)
        } else {
            console.log('tente ligar para abrir o menu')
        }
    }

    fecharMenu(): void {
        console.log('fechando o menu...')
    }

    maisVolume(): void {
        if (this.ligado) {
            this.volume = Number(this.volume) + 5
        } else {
            console.log('não pode aumentar o volume, deve-se ligar primeiro')
        }
    }

    menosVolume(): void {
        if (this.ligado) {
            this._volume = Number(this.volume) - 5
        } else {
            console.log('não pode diminuir o volume, deve-se ligar primeiro')
        }
    }

    ligarMudo(): void {
        if (this.ligado && Number(this.volume) > 0) {
            this.volume = 0
        } else {
            console.log('não pode colocar no mudo \nverifique se o controle está ligado ou se o volume está acima de 0')
        }
    }

    desligarMudo(): void {
        if (this.ligado && Number(this.volume) === 0) {
            this.volume = 50
        } else {
            console.log('não pode desligar o mudo! \nverifique se o controle está ligado ou se ja está no mudo')
        }
    }   

    play(): void {
        if (this.ligado && !this.tocando) {
            this.tocando = true
        }
    }

    pause(): void {
        if (this.ligado && this.tocando) {
            this.tocando = false
        }
    }
     
    private get volume(): Number {
        return this._volume
    }

    private set volume(volume: Number) {
        this._volume = volume
    }

    private get ligado(): Boolean {
        return this._ligado 
    }

    private set ligado(ligado: Boolean) {
        this._ligado = ligado
    }

    private get tocando(): Boolean {
        return this._tocando
    }

    private set tocando(tocando: Boolean) {
        this._tocando = tocando
    }
}

export default ControleRemoto
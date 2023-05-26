class ContaBanco {
    #num_conta
    #tipo
    #dono
    #saldo
    #status

    constructor() {
        this.#status = false
        this.#saldo = 0
    }

    abrir_conta(tipo) {
        this.tipo = tipo
        this.status = true

        if (tipo === 'corrente') {
            this.saldo = 50
        } else if (tipo === 'poupanca') {
            this.saldo = 150
        }
    }

    fechar_conta() {
        if (this.saldo === 0) {
            this.status = false
        } else {
            console.log('seu saldo deve ser igual a zero para fechar a conta!')
        }
    }

    depositar(valor_deposito) {
        if (this.status == true) {
            this.saldo = this.saldo + valor_deposito
        } else {
            console.log('sua conta deve ser ativida para depositar')
        }
    }

    sacar(valor_saque) {
        if (this.status == true && this.saldo > 0) {
            if (valor_saque > this.saldo) {
                console.log('valor do saque maior do que o seu saldo, saldo atual: ' + this.saldo)
            } else {
                this.saldo = this.saldo - valor_saque
                console.log('saque realizado com sucesso, saldo atual: ' + this.saldo)
            }
        } else {
            console.log('impossivel sacar! a conta deve ser ativada e o saldo maior que zero')
        }
    }

    pagar_mensalidade() {
        if (this.tipo === 'corrente' && this.status === true) {

            if (this.saldo >= 12) {
                this.saldo = this.saldo - 12
            } else {
                console.log('seu saldo está abaixo da mensalidade')
            }

        } else if (this.tipo == 'poupanca' && this.status == true) {

            if (this.saldo >= 20) {
                this.saldo = this.saldo - 20
            } else {
                console.log('seu saldo está abaixo da mensalidade')
            }

        } else {
            console.log('sua conta deve ser ativiada para pagar a mensalidade')
        }
    }

    get num_conta() {
        return this.#num_conta
    }

    set num_conta(num_conta) {
        this.#num_conta = num_conta
    }

    get tipo() {
        return this.#tipo
    }

    set tipo(tipo) {
        this.#tipo = tipo
    }

    get dono() {
        return this.#dono
    }

    set dono(dono) {
        this.#dono = dono
    }

    get saldo() {
        return this.#saldo
    }

    set saldo(saldo) {
        this.#saldo = saldo
    }

    get status() {
        return this.#status
    }

    set status(status) {
        this.#status = status
    }

    estado() {
        console.log('numero da conta ' + this.num_conta)
        console.log('status: ' + this.status)
        console.log('dono: ' + this.dono)
        console.log('saldo: ' + this.saldo)
        console.log('tipo da conta: ' + this.tipo)
    }
}

const pessoa1 = new ContaBanco()
pessoa1.num_conta = 1111
pessoa1.dono = 'jubileu'
pessoa1.abrir_conta('corrente')
pessoa1.depositar(100)
pessoa1.pagar_mensalidade()

const pessoa2 = new ContaBanco()
pessoa2.num_conta = 2222
pessoa2.dono = 'creuza'
pessoa2.abrir_conta('poupanca')
pessoa2.depositar(500)
pessoa2.pagar_mensalidade()

console.log(pessoa1.estado())
console.log('-------------------')
console.log(pessoa2.estado())
class Customer {
    name;
    cpf;
}

class ContaCorrente {
    agency;
    balance;

    sacar(valor){
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Saque no valor de R$ ${valor} realizado com sucesso.`)
            console.log(`Saldo atual: R$ ${this.saldo}`);
        }else {
            console.log(`Saldo insuficiente para saque de R$ ${valor}. Saldo atual: R$ ${this.saldo}`);
        }
    }

    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Deposito no valor de R$ ${valor} realizado com sucesso.`)
            console.log(`Saldo atual: R$ ${this.saldo}`);
        }
    }

}

const customer = new Customer();
customer.name = "Lucas";
customer.cpf = 9999999999;

const contaCorrenteLucas = new ContaCorrente();
contaCorrenteLucas.saldo = 0;
contaCorrenteLucas.agency = 1001;
contaCorrenteLucas.depositar(50);

console.log(contaCorrenteLucas);
console.log(contaCorrenteLucas.saldo);

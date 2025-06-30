class Customer {
    name;
    cpf;
}

class ContaCorrente {
    agency;
    balance = 0;

    sacar(value){
        if (this.balance >= value) {
            this.balance -= value;
            console.log(`Saque no valor de R$ ${value} realizado com sucesso.`)
            console.log(`Saldo atual: R$ ${this.balance}`);
        }else {
            console.log(`Saldo insuficiente para saque de R$ ${value}. Saldo atual: R$ ${this.balance}`);
        }
        return value;
    }

    depositar(value) {
        if (value > 0) {
            this.balance += value;
            console.log(`Deposito no valor de R$ ${value} realizado com sucesso.`)
            console.log(`Saldo atual: R$ ${this.balance}`);
            return value
        }
    }

}

const customer = new Customer();
customer.name = "Lucas";
customer.cpf = 9999999999;

const contaCorrenteLucas = new ContaCorrente();
contaCorrenteLucas.balance = 0;
contaCorrenteLucas.agency = 1001;
contaCorrenteLucas.depositar(200);
contaCorrenteLucas.sacar(100);

console.log(contaCorrenteLucas);
console.log(contaCorrenteLucas.balance);

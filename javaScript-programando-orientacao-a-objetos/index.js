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
        }
    };
}

const customer = new Customer();
customer.name = "Lucas";
customer.cpf = 9999999999;

const customer1 = new Customer();
customer1.name = "Rayssa";
customer1.cpf = 88888888888;

const contaCorrenteLucas = new ContaCorrente();
contaCorrenteLucas.saldo = 0;
contaCorrenteLucas.agency = 1001;
contaCorrenteLucas.saldo = 100;
contaCorrenteLucas.sacar(50);

console.log(contaCorrenteLucas.saldo)
contaCorrenteLucas.saldo = 100;
console.log(contaCorrenteLucas.saldo)
contaCorrenteLucas.sacar(10);

console.log(contaCorrenteLucas.saldo);

console.log(customer);
console.log(customer1);
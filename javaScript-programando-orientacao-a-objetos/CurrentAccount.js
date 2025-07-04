import { Customer } from "./Customer.js";

export class CurrentAccount {
    agency;
    _customer;
    _balance = 0;

    set customer(newValue){
        if(newValue instanceof Customer){
            this._customer = newValue;
        }
    }

    get customer(){
        return this._customer;
    }

    get balance(){
        return this._balance;
    }

    constructor(customer, agency){
        this.agency = agency;
        this._customer = customer;
    }

    withdraw(value){
        if (this.balance >= value) {
            this.balance -= value;
            console.log(`Saque no valor de R$ ${value} realizado com sucesso.`)
            console.log(`Saldo atual: R$ ${this.balance}`);
        }else {
            console.log(`Saldo insuficiente para saque de R$ ${value}. Saldo atual: R$ ${this.balance}`);
        }
        return value;
    }

    deposit(value) {
        if (value > 0) {
            this.balance += value;
            console.log(`Deposito no valor de R$ ${value} realizado com sucesso.`)
            console.log(`Saldo atual: R$ ${this.balance}`);
            return value
        }
    }

    transfer(value, account){
        const withdrawValue = this.withdraw(value);
        account.deposit(withdrawValue);
    }

}
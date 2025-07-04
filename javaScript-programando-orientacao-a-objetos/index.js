import {Customer} from './Customer.js';
import {CurrentAccount} from './CurrentAccount.js';

const customer0 = new Customer("Lucas", 99999999999);

const customer1 = new Customer("Rayssa", 88888888888);

const customer2 = new Customer("Davi", 77777777777);

const customer3 = new Customer("Luana", 66666666666);

const account0 = new CurrentAccount(1001, customer0);

const account1 = new CurrentAccount(1001, customer1);

const account2 = new CurrentAccount(1001, customer2);

const account3 = new CurrentAccount(1001, customer3);

console.log(account0);
console.log(account1);
console.log(account2);
console.log(account3);


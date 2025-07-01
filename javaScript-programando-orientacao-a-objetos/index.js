import {Customer} from './Customer.js';
import {CurrentAccount} from './CurrentAccount.js';

const customer0 = new Customer();
customer0.name = "Lucas";
customer0.cpf = 9999999999;

const customer1 = new Customer();
customer1.name = "Rayssa";
customer1.cpf = 9999999999;


const account0 = new CurrentAccount();
account0.agency = 1001;
account0.customer = customer0;
account0.deposit(500);

const account1 = new CurrentAccount();
account1.agency = 1002;
account1.customer = customer1;

account0.transfer(200, account1);


console.log(account0);
console.log(account1);


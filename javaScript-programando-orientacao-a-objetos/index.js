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

const account2 = new CurrentAccount();
account2.customer = new Customer();
account2.customer.name = "Davi";
account2.customer.cpf = 77777777777;
account2.agency = 1003;

const account3 = new CurrentAccount();
account3.customer = new Customer;
account3.name = "Luana";
account3.cpf = 66666666666;
account3.agency = 1004;

account0.transfer(200, account3);


console.log(account0);
console.log(account1);
console.log(account2);
console.log(account3);


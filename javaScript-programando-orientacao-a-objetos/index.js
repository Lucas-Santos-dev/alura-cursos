class Customer {
    name;
    cpf;
    agency;
    balance;
}

const customer = new Customer();
const customer1 = new Customer();

customer.name = "Lucas";
customer.cpf = 9999999999;
customer.agency = 1001;
customer.balance = 0;

customer1.name = "Rayssa";
customer1.cpf = 88888888888;
customer1.agency = 1001;
customer1.balance = 0;

console.log(customer, customer1);
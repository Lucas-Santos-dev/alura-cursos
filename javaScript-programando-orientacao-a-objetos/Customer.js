export class Customer {
    name;
    _cpf;

    get cpf(){
        return this.cpf;
    }

    constructor(name, cpf){
        this.name = name;
        this._cpf = cpf;
    }
}
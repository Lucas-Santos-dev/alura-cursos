import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
export class NegotiationController {
    constructor() {
        this.negociations = new Negotiations();
        this.inputDate = document.querySelector('#date');
        this.inputAmount = document.querySelector('#amount');
        this.inputValue = document.querySelector("#value");
    }
    add() {
        const negotiation = this.createNegotiation();
        this.negociations.add(negotiation);
        console.log(this.negociations.list());
        console.log(negotiation);
        this.clearForm();
    }
    createNegotiation() {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ','));
        const amount = parseInt(this.inputAmount.value);
        const value = parseFloat(this.inputValue.value);
        return new Negotiation(date, amount, value);
    }
    clearForm() {
        this.inputDate.value = '';
        this.inputAmount.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
}

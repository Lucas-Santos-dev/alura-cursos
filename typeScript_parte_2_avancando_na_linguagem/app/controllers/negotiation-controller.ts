import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { NegotiationView } from "../views/negotiations-view.js";
import { MessageView } from "../views/message-view.js";

export class NegotiationController {
    private inputDate: HTMLInputElement;
    private inputAmount: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private negociations: Negotiations = new Negotiations();
    private negociationsView = new NegotiationView('#negotiationsView');
    private messageView = new MessageView('#messageView');

    constructor() {
        this.inputDate = document.querySelector('#date');
        this.inputAmount = document.querySelector('#amount');
        this.inputValue = document.querySelector("#value")
        this.negociationsView.update(this.negociations);
    }

    add(): void {
       const negotiation = this.createNegotiation();
       this.negociations.add(negotiation);
       this.negociationsView.update(this.negociations);
       this.messageView.update('Negociação adicionada com sucesso');
       console.log(this.negociations.list());
       console.log(negotiation);
       this.clearForm();
    }

    createNegotiation(): Negotiation {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ','));
        const amount = parseInt(this.inputAmount.value);
        const value = parseFloat(this.inputValue.value);
        return new Negotiation(date, amount, value);
    }

    clearForm(): void {
        this.inputDate.value = '';
        this.inputAmount.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
}
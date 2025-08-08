export class View {
    constructor(seletor) {
        this.element = document.querySelector(seletor);
    }
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
    template(model) {
        throw Error('Classe Filha precisa imprementar metodo pai ');
    }
}

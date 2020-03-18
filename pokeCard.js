class PokeCard extends HTMLElement {
    constructor() {
        super();
        const name = this.getAttribute('name'); 
        this.innerHTML = `${name}`;
    }
}

window.customElements.define('poke-card', PokeCard);
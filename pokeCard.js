class PokeCard extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `PokeCard`;
    }
}

window.customElements.define('poke-card', PokeCard);
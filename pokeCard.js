const template = document.createElement('template');

template.innerHTML = `
    <style>
        h3 {
            color: coral;
        }
    </style>

    <h3></h3>
`;

class PokeCard extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        const name = this.getAttribute('name'); 
        this.shadowRoot.querySelector('h3').innerText = name;
    }
}

window.customElements.define('poke-card', PokeCard);
const template = document.createElement('template');

template.innerHTML = `
    <style>
        img {
            width: 150px;
        }    
    
        h3 {
                color: coral;
        }
    </style>

    <img />
    <h3></h3>
`;

class PokeCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const name = this.getAttribute('name');
    const imageURL = this.getAttribute('avatar');
    this.shadowRoot.querySelector('h3').innerText = name;
    this.shadowRoot.querySelector('img').setAttribute('src', imageURL);
  }
}

window.customElements.define('poke-card', PokeCard);

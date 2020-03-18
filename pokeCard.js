const template = document.createElement('template');

template.innerHTML = `
    <style>
        .poke-card {
            background: #f4f4f4;
            width: 500px;
            display: flex;
            margin-bottom: 25px;
            border-bottom: #1a1a1a 5px solid;
        }

        .poke-card img {
            width: 150px;
            margin-right: 25px;
        }
    </style>

    <div class="poke-card">
        <img />
        <div>
            <h3></h3>
        </div>
    </div>

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

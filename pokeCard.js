const template = document.createElement('template');

template.innerHTML = `
    <style>
        .poke-card {
            background: #f4f4f4;
            font-family: Arial, sans-serif;
            width: 500px;
            display: flex;
            margin-bottom: 25px;
            border-bottom: #1a1a1a 5px solid;
        }

        .poke-card img {
            width: 170px;
            margin-right: 25px;
        }

        .poke-card #toggle-info {
            cursor: pointer;
            background: #1a1a1a;
            color: #fff;
            border: 0;
            border-radius: 5px;
            padding: 5px 10px;
        }
    </style>

    <div class="poke-card">
        <img />
        <div>
            <h3></h3>
            <div class="info">
                <p>Altura: <slot name="height" /></p>
                <p>Peso: <slot name="weight" /></p>
            </div>
            <button id="toggle-info">Hide info</button>
        </div>
    </div>

`;

class PokeCard extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const name = this.getAttribute('name');
    const imageURL = this.getAttribute('avatar');
    this.shadowRoot.querySelector('h3').innerText = name;
    this.shadowRoot.querySelector('img').setAttribute('src', imageURL);
  }

  toggleInfo() {

    this.showInfo = !this.showInfo;
    
    const info = this.shadowRoot.querySelector('.info');
    const infoBtn = this.shadowRoot.querySelector('#toggle-info');

    if (this.showInfo) {
      info.style.display = 'block';
      infoBtn.innerText = 'Hide info';
    } else {
      info.style.display = 'none';
      infoBtn.innerText = 'Show info';
    }
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector('#toggle-info')
      .addEventListener('click', () => this.toggleInfo());
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('#toggle-info').removeEventListener();
  }
}

window.customElements.define('poke-card', PokeCard);

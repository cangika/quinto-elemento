import { LitElement, html, css } from 'lit';

export class Titulo extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
               
                font-family: var(--fonte-corpo);
                font-size: 50px;
                font-style: normal;
                font-weight: 800;
                
                background: linear-gradient(90deg, #102981 0%, #0A1C3A 55.21%, #102981 100%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        `
    ];

    render() {
        return html`<slot>Bem Vindo a Quinto Elemento</slot>`;
    }
}
customElements.define('app-titulo', Titulo);

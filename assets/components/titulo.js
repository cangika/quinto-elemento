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
                
                color: black;
            }
        `
    ];

    render() {
        return html`<slot>Título</slot>`;
    }
}
customElements.define('app-titulo', Titulo);

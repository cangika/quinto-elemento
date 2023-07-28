import { LitElement, html, css } from 'lit';

export class Quadro extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
                width: 311px;
                height: 176px;
                justify-content: center;
                align-items: center;

                border-radius: 7px;
                background: rgba(182, 182, 182, 0.70);
            }
        `
    ];

    render() {
        return html`<slot>coloque uma imagem</slot>`;
    }
}
customElements.define('app-quadro', Quadro);

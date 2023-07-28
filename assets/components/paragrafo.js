import { LitElement, html, css } from 'lit';

export class Paragrafo extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;

                font-family: var(--fonte-corpo);
                color: #000;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
        `
    ];

    render() {
        return html`<slot>subtítulo</slot>`;
    }
}
customElements.define('app-paragrafo', Paragrafo);

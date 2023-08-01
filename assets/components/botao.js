import { LitElement, html, css } from 'lit';

export class Botao extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }

            ::slotted(button), button, ::slotted(a) {
                display: flex;
                padding: 4px 18px;
                justify-content: center;
                align-items: center;
                gap: 10px;
                border: 0;

                border-radius: 10px;
                background: var(--tom-logo-claro);
                box-shadow: 0px 4px 7px 0px rgba(0, 0, 0, 0.25);

                color: #FFF;
                text-align: center;
                font-family: var(--fonte-corpo);
                font-size: 15px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }
        `
    ];

    render() {
        return html`
        <slot>
            <button>Pressione</button>
        </slot>
        `;
    }
}
customElements.define('app-botao', Botao);

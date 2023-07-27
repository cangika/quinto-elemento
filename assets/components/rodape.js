import { LitElement, html, css } from 'lit';

export class Rodape extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }

            span {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 10px;

                width: 360px;
                height: 76px;
                background: rgba(10, 28, 58, 0.70);

                justify-content: center;
                align-items: center;
                color: #FFF;
                text-align: center;
                font-family: var(--fonte-corpo);
                font-size: 7px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
        `
    ];

    render() {
        return html`
         <span>
         © 2023 Quinto Elemento | Todos os direitos reservados | Política de Privacidade
         </span>
        
        `;
    }
}
customElements.define('app-rodape', Rodape);

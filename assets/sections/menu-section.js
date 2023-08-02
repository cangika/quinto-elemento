import { LitElement, html, css } from 'lit';

export class MenuSection extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }

            dialog {
                display: flex;
                width: 100%;
                height: 100%;
                max-height: 100%;
                max-width: 100%;
                padding: 2rem;
                border: 0;
                margin: 0;
                box-sizing: border-box;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                flex-shrink: 0;

               opacity: 0;
               pointer-events: none;
               transition: opacity 300ms;

                background-color: rgba(0, 0, 0, 40%);
                position: fixed;
                z-index: 110;
            }
        `
    ];

    render() {
        return html`
        <dialog>
        <nav>
            <a @click=${nav.fechar}>Home</a>
            <a @click=${nav.fechar}>Somos a QE</a>
            <a @click=${nav.fechar}>Somos a QE</a>
            <a @click=${nav.fechar}>Somos a QE</a>
            <a @click=${nav.fechar}>Serviços</a>
            <a @click=${nav.fechar}>Materiais gratuitos</a>
            <a @click=${nav.fechar}>Insight blog</a>
            <a @click=${nav.fechar}>Contato</a>

            <a @click=${nav.fechar} href ="/">Home <feather-icon icon="home"></feather-icon></a>

            <button title="fechar menu" @click=${nav.fechar}>
                    <feather-icon icon="x"></feather-icon>
                </button>
        </nav>
        </dialog>
        `;
    }
}
customElements.define('menu-section', MenuSection);

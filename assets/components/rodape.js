import { LitElement, html, css } from 'lit';

export class Rodape extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                overflow: hidden;
                
            }

            footer {
                display: inline-flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;
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

            .titulo {
                font-size: 16px;
                font-weight: 600;
            }

            .contatos {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 23px;
            }

            article {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 8px;
            }

            aside {
                display: flex;
                width: 360px;
                height: 101px;
                flex-direction: column;
                align-items: center;
                gap: 19px;
            }

            nav {
                display: flex;
                width: 322px;
                height: 6px;
                justify-content: center;
                align-items: center;
                gap: 7px;
                flex-shrink: 0;
                font-size: 8px;
            }

            app-paragrafo {
                color: white;
                font-family: var(--fonte-corpo);
                font-size: 11px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }

            .navbar {
                font-size: 8px;
            }

            app-forma2 {
                position: inherit;
                z-index: -10;
            }
        `
    ];

    render() {
        return html`

        <footer>
            <app-forma2></app-forma2>

            <article>
                <app-paragrafo class="titulo">Alguma dúvida?</app-paragrafo>
                <app-paragrafo>Fale com um de nossos especialistas.</app-paragrafo>
            </article>
            <aside class="contatos">
                <app-line></app-line>
                <article>
                    <app-paragrafo>+ 55(11) 94790-6909 | +55(11) 97866-139</app-paragrafo>
                    <app-paragrafo>comercial@quintoelemento.com.br</app-paragrafo>
                </article>
                <app-line></app-line>
            </aside>
            <aside>
                <nav>
                    <app-paragrafo class="navbar">Home</app-paragrafo>
                    <app-paragrafo class="navbar">Somos a QE</app-paragrafo>
                    <app-paragrafo class="navbar">Serviços</app-paragrafo>
                    <app-paragrafo class="navbar">Materiais gratuitos</app-paragrafo>
                    <app-paragrafo class="navbar">Insight blog</app-paragrafo>
                    <app-paragrafo class="navbar">Contato</app-paragrafo>
                </nav>
                
                <span>
             © 2023 Quinto Elemento | Todos os direitos reservados | Política de Privacidade
            </span>
             
            </aside>
        </footer>
        
        `;
    }
}
customElements.define('app-rodape', Rodape);

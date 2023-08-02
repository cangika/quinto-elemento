import { LitElement, html, css } from 'lit';

export class Rodape extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                overflow-y: visible;
                overflow-x: clip;
                position: relative;
                
            }

            footer {
                display: inline-flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 10px;
                padding-top: 30px;

                background: linear-gradient(65deg, #0A1C3A 0%, #102981 100%);
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
                padding: 0px 10px;
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
                align-items: flex-start;
                gap: 19px;
                padding: 0px 10px;
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
                position: absolute;
                bottom: 0;
                left: 0;
                z-index: -10;
            }

            a, button {
                color: white;
                text-decoration: none;
                opacity: 0.9;
                font-family: var(--fonte-corpo);
                font-size: 0.75rem;

                cursor: pointer;
                transition: color 300ms;
            }

            a:hover, button:hover {
                color: var(--tom-1)
            }

            a:active, button:active {
                color: var(--cor-primaria)
            }

            button {
                padding: 0;
                border: 0;
                background: transparent;
            }

            @media (min-width: 1024px) {
                footer {
                    width: 100%;
                }
                span {
                    width: 100%;
                    justify-content: center;
                }

                aside {
                    justify-content: center;
                }
            }
        `
    ];

    render() {
        return html`

        <footer>
            <!-- <app-forma2></app-forma2> -->

            <aside>
                <article>
                    <app-paragrafo class="titulo">Alguma dúvida?</app-paragrafo>
                    <app-paragrafo>Fale com um de nossos especialistas.</app-paragrafo>
                </article>
                <app-botao><a href="">Fale conosco</a></app-botao>
            </aside>
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
                    <a href ="/" class="navbar">Home</a>
                    <a href ="" class="navbar">Somos a QE</a>
                    <a href ="" class="navbar">Serviços</a>
                    <a href ="" class="navbar">Materiais gratuitos</a>
                    <a href ="" class="navbar">Insight blog</a>
                    <a href ="" class="navbar">Contato</a>
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

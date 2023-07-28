import { LitElement, html, css } from 'lit';
import { section } from '../styles/section-styles';

export class DepoimentosSection extends LitElement {
    static styles = [
        section,
        css`
            section {
                justify-content: center;
                align-items: center;
                flex-shrink: 0;
            }

            div {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 10px;
            }
            

            aside {
                display: flex;
                padding: 45px 35px;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 28px;

                border-radius: 10px;
                background: #FFF;
                box-shadow: 0px 7px 30px 0px rgba(0, 0, 0, 0.30);
            }

            article {
                display: flex;
                width: 246px;
                height: 222px;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 25px;
            }

            article app-paragrafo:first-child {
                font-weight: 600;
            }

            .descricao {
                text-align: center;
                font-size: 13px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }

            app-titulo {
                display: flex;
                width: 282px;
                height: 77px;
                justify-content: flex-end;
                align-items: center;
                text-align: center;

                position: absolute;
                left: 39px;
                top: 27px;
                font-size: 28px;
                color: white;
            }

            app-quadro {
                display: flex;
                width: 225px;
                height: 75px;
                justify-content: center;
                align-items: center;

                background: white;
            }

            img {
                width: 100%;
            }

            app-forma {
                position: absolute;
                top: 0px;
                z-index: -10;
                
            }

            @media (min-width: 1024px) {
                app-forma {
                    width: 100%;
                }
            }


        `
    ];

    render() {
        return html`
        <section>
            <app-titulo><span>Depoimentos de nossos clientes</span></app-titulo>
            
            <aside>
                <app-quadro>
                    <img src="fermentech.png" alt="fermentech-depoimentos" />
                </app-quadro>
                <article>
                    <app-paragrafo>Fermentech</app-paragrafo>
                    <app-paragrafo class="descricao">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim.
                    </app-paragrafo>
                </article>
            </aside>
        </section>

        <div>
            <app-forma></app-forma>
        </div>
        
        `;
    }
}
customElements.define('depoimentos-section', DepoimentosSection);

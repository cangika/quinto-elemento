import { LitElement, html, css } from 'lit';
import { section } from '../styles/section-styles';

export class DepoimentosSection extends LitElement {
    static styles = [
        section,
        css`
            section {
                width: 100%;
                justify-content: center;
                align-items: center;
                flex-shrink: 0;
                gap: 40px;
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

            /* .clientes {
                display: flex;
                width: 97px;
                height: 28px;
                justify-content: center;
                align-items: center;
                flex-shrink: 0;
            } */

            app-titulo {
                display: flex;
                width: 100%;
                height: 77px;
                justify-content: flex-end;
                align-items: center;
                text-align: center;
                flex-shrink: 0;
                padding-bottom: 40px;

                /* position: absolute; */
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

                app-titulo {
                    justify-content: center;
                }
            }


        `
    ];

    render() {
        return html`
        <section>
       
            <app-titulo>Depoimentos de nossos clientes</app-titulo>
            
            <aside>
                <app-quadro>
                    <img slot="imagem" src="fermentech.png" alt="fermentech-depoimentos">
                </app-quadro>
                <article>
                    <app-paragrafo>Fermentech</app-paragrafo>
                    <app-paragrafo class="descricao">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim.
                    </app-paragrafo>
                </article>
                 <div>
            <app-forma></app-forma>
        </div>
            </aside>
            <!-- <app-quadro class="clientes">
                <img src="fermentech.png" alt="fermentech-depoimentos">
            </app-quadro> -->

           
        
        </section>
        
        `;
    }
}
customElements.define('depoimentos-section', DepoimentosSection);

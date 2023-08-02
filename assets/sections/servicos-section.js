import { LitElement, html, css } from 'lit';
import { section } from '../styles/section-styles';

export class ServicosSection extends LitElement {
    static styles = [
        section,
        css`
            :host {
                display: flex;
            }

            section {
                display: flex;
                width: 100%;
                justify-content: center;
                align-items: center;
                gap: 22px;
                flex-shrink: 0;
            }

            aside {
                display: flex;
                height: 418px;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                gap: 20px;
            }

            article {
                display: flex;
                width: 200px;
                flex-direction: column;
                align-items: flex-start;
                gap: 20px;
            }

            app-titulo {
                font-size: 32px;
                font-weight: 700;
                line-height: 45px;

                background: linear-gradient(90deg, #003662 0%, #0A1C3A 55.21%, #003662 100%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            app-paragrafo {
                display: flex;
                width: 188px;
                height: 155px;
                justify-content: center;
                align-items: center;
                font-size: 12px;
                font-weight: 400;
                line-height: 15px;
            }

            app-quadro {
                display: flex;
                width: 138px;
                height: 418px;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                flex-shrink: 0;
                border-radius: 0px 7px 7px 0px;
            }

            img {
                height: 120%;
            }

             swiper-container {
                width: 100%;
                height: 100%;
            }

            swiper-slide {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            @media (min-width: 1024px) {
                app-titulo {
                    font-size: 38px;
                }

                app-quadro {
                    width: 265px;
                    height: 520px;
                    border-radius: 8px;
                }
            }
        `
    ];

    render() {
        return html`
        <section>
            <app-quadro>
                <swiper-container>
                    <swiper-slide>
                        <img class="imagem" loading="lazy" src="servicos-2.jpg" alt="serviços slider" >
                    </swiper-slide>
                </swiper-container>
            </app-quadro>
            <aside>
                <article>
                    <app-titulo>O que sua empresa precisa?</app-titulo>
                    <app-paragrafo>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est.
                    </app-paragrafo>
                </article>
                <app-botao><a href="">Ver serviços</a></app-botao>
            </aside>
        </section>
        
        `;
    }
}
customElements.define('servicos-section', ServicosSection);

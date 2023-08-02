import { LitElement, html, css } from 'lit';
import { section } from '../styles/section-styles';

export class IntroduçãOSection extends LitElement {
    static styles = [
        section,
        css`
            :host {
                display: flex;
            }

            section {
                display: flex;
                width: 100%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 32px;
                flex-shrink: 0;
            }

            article {
                display: flex;
                height: 258px;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 39px;
                flex-shrink: 0;
            }

            app-titulo {
                text-align: center;
                font-size: 20px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;

                background: linear-gradient(90deg, #003662 0%, #0A1C3A 55.21%, #003662 100%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            app-paragrafo {
                color: #000;
                text-align: center;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }

            img {
                width: 100%;
            }

            app-quadro {
                display: flex;
                width: 269px;
                height: 269px;
                justify-content: center;
                align-items: center;
                flex-shrink: 0;
            }

            @media (min-width: 1024px) {
                app-titulo {
                    font-size: 36px;
                }

                app-paragrafo {
                    font-size: 22px;
                }

                app-quadro {
                    width: 369px;
                }
            }
        `
    ];

    render() {
        return html`
        <section>
            <article>
                <app-titulo class="animate__animated animate__delay-6" data-toggle-class="animate__fadeInUp">CRESÇA 2 ANOS EM 6 MESES!</app-titulo>
                <app-paragrafo>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est.</app-paragrafo>
            </article>
            <app-quadro>
                <img slot="imagem" src="icon inicio.jpg" alt="ilustração início">
            </app-quadro>
        </section>

        `;
    }
}
customElements.define('introdução-section', IntroduçãOSection);

import { LitElement, html, css } from 'lit';
import { section } from '../styles/section-styles';

export class HeadtrainerSection extends LitElement {
    static styles = [
        section,
        css`
            :host {
                display: flex;
                background: linear-gradient(90deg, #0A1C3A 0%, #00B9E9 100%);
            }

            section {
                display: flex;
                width: 100%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 25px;
                flex-shrink: 0;

                
            }

            aside {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 20px;
            }

            article {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 3px;
            }

            .titulo {
                font-size: 32px;
                font-weight: 700;
            }

            .subtitulo {
                font-size: 26px;
                font-weight: 500;
            }

            app-paragrafo {
                color: #FFF;
                text-align: justify;
                font-family: var(--fonte-corpo);
                font-size: 13px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
            }

            img {
                width: 100%;
                border-radius: 7px;
                
            }

            app-quadro {
                display: flex;
                width: 265px;
                height: 272px;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                flex-shrink: 0;

            }

            @media (min-width: 1024px) {
                section {
                    flex-direction: row;
                }

                app-paragrafo {
                    font-size: 22px;
                }

                app-quadro {
                    width: 500px;
                    height: 500px;
                }
            }
        `
    ];

    render() {
        return html`

        <section>
            <app-quadro>
                <img slot="imagem" src="head trainer.png" alt="head trainer">
            </app-quadro>
            <aside>
                <article>
                    <app-paragrafo class="titulo">WILSON RIOS</app-paragrafo>
                    <app-paragrafo class="subtitulo">HEAD TRAINER</app-paragrafo>
                </article>
                <app-paragrafo>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede.
                </app-paragrafo>
            </aside>
        </section>
        
        
        `;
    }
}
customElements.define('headtrainer-section', HeadtrainerSection);

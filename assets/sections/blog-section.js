import { LitElement, html, css } from 'lit';
import { section } from '../styles/section-styles';

export class BlogSection extends LitElement {
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
                gap: 45px;
                flex-shrink: 0;
            }

            aside {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 45px;
            }

            article {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 26px;
            }

            .nome {
                height: 17px;
                font-size: 24px;
                font-weight: 600;
            }

            .titulo {
                height: 35px;
                font-size: 16px;
                font-weight: 600;
            }

            img {
                width: 100%;
                border-radius: 7px;
            }

            app-paragrafo {
                display: flex;
                width: 311px;
                height: 116px;

                color: #000;
                text-align: justify;
                font-size: 13px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }

            app-quadro {
                border-radius: 7px;
                box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
            }

            swiper-container {
                width: 100svw;
                height: 500px;

                align-items: center;
                position: relative;
                left: 50%;
                transform: translatex(-50%);
            }

            swiper-slide {
                padding-top: 1rem;
                display: flex;
                justify-content: center;
                transition: transform 500ms;
            }

        `
    ];

    firstUpdated() {
        const swiper = this.renderRoot.querySelector('swiper-container')

        console.log(swiper)

        Object.assign(swiper, {
            spaceBetween: -75,
            initialSlide: 1,
            rewind: true,
            breakpoints: {
                768: {
                    spaceBetween: -275
                },
                1024: {
                    spaceBetween: -575
                },
                1368: {
                    centeredSlide: true,
                    slidesPerView: 3,
                    spaceBetween: 0,
                },
            }
        })

        swiper.initialize()
    }

    render() {
        return html`
        <section>
            <app-paragrafo class="nome">Confira nosso Blog</app-paragrafo>
            <swiper-container>
                <swiper-slide>
                    <aside>
                        <app-quadro>
                            <img slot="imagem" loading="lazy" src="blogs.jpg" alt="capa blogs" >
                        </app-quadro>
                        <article>
                            <app-paragrafo class="titulo">Líder deve atuar como psicólogo(a) da equipe?</app-paragrafo>
                            <app-paragrafo>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim.</app-paragrafo>
                        </article>
                        <app-botao><a href="">Ler artigo</a></app-botao>
                    </aside>
                </swiper-slide>
                <swiper-slide>
                    <aside>
                        <app-quadro>
                            <img slot="imagem" loading="lazy" src="blogs.jpg" alt="capa blogs" >
                        </app-quadro>
                        <article>
                            <app-paragrafo class="titulo">Líder deve atuar como psicólogo(a) da equipe?</app-paragrafo>
                            <app-paragrafo>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim.</app-paragrafo>
                        </article>
                        <app-botao><a href="">Ler artigo</a></app-botao>
                    </aside>
                </swiper-slide>
            </swiper-container>
        </section>
        `;
    }
}
customElements.define('blog-section', BlogSection);

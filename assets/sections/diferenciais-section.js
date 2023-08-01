import { LitElement, html, css } from 'lit';
import { section } from '../styles/section-styles';

export class DiferenciaisSection extends LitElement {
    static styles = [
        section,
        css`
            :host {
                display: flex;
            }

            section {

                padding: 0px 23px;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                gap: 47px;
                flex-shrink: 0;

                border-radius: 0px 0px 0px 90px;
                background: #EEE;
            }

            aside {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 32px;
            }

            article {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 25px;
            }

            app-titulo {
                display: flex;
                width: 200px;
                height: 77px;
                justify-content: flex-end;
                align-items: center;
                flex-shrink: 0;

                font-size: 32px;
                background: linear-gradient(90deg, #003662 0%, #0A1C3A 55.21%, #003662 100%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            app-paragrafo {
                display: flex;
                width: 206px;
                height: 54px;
                justify-content: center;
                align-items: center;
                border-radius: 7px;
                background: var(--tom-2, #003662);

                text-align: center;
                font-size: 18px;
                font-weight: 500;
                color: white;
            }
        `
    ];

    render() {
        return html`
        <section>
            <app-titulo>Nossos Diferenciais</app-titulo>
            <aside>
                <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                  <path d="M23.9394 28.811C23.3588 28.2304 22.5714 27.9042 21.7503 27.9042C20.9292 27.9042 20.1417 28.2304 19.5611 28.811C18.9805 29.3916 18.6543 30.1791 18.6543 31.0002C18.6543 31.8213 18.9805 32.6087 19.5611 33.1893L28.8111 42.4393C29.0992 42.7251 29.4409 42.9512 29.8166 43.1046C30.1922 43.2581 30.5945 43.3359 31.0003 43.3335C31.4224 43.3201 31.8372 43.2202 32.2191 43.0398C32.601 42.8595 32.9418 42.6026 33.2203 42.2852L54.8036 17.6185C55.302 16.9998 55.5423 16.2125 55.4744 15.421C55.4065 14.6294 55.0357 13.8946 54.4393 13.3697C53.8428 12.8449 53.0668 12.5705 52.273 12.6038C51.4793 12.6371 50.729 12.9755 50.1786 13.5485L31.0003 35.7485L23.9394 28.811Z" fill="url(#paint0_linear_326_14)"/>
                  <path d="M58.7503 27.9167C57.9326 27.9167 57.1483 28.2416 56.5701 28.8198C55.9919 29.3981 55.667 30.1823 55.667 31.0001C55.667 37.5421 53.0682 43.8162 48.4423 48.442C43.8164 53.0679 37.5424 55.6667 31.0003 55.6667C26.129 55.6645 21.3673 54.2199 17.3158 51.5152C13.2643 48.8104 10.1044 44.9665 8.2345 40.4683C6.36463 35.9701 5.86854 31.0189 6.80879 26.2391C7.74904 21.4593 10.0835 17.0649 13.5178 13.6101C15.8017 11.2957 18.5242 9.46004 21.5261 8.21059C24.5279 6.96113 27.7489 6.32296 31.0003 6.33341C32.972 6.34576 34.9364 6.57322 36.8587 7.01175C37.261 7.13617 37.6844 7.17689 38.1031 7.13138C38.5217 7.08587 38.9265 6.9551 39.2927 6.74713C39.6588 6.53916 39.9784 6.2584 40.2319 5.92217C40.4854 5.58593 40.6673 5.20134 40.7664 4.7921C40.8656 4.38286 40.8799 3.95765 40.8084 3.54269C40.7369 3.12773 40.5812 2.7318 40.3508 2.37932C40.1205 2.02684 39.8204 1.72528 39.469 1.49323C39.1176 1.26118 38.7225 1.10356 38.3078 1.03008C35.9126 0.46658 33.461 0.176946 31.0003 0.166748C24.9087 0.198394 18.963 2.03377 13.9134 5.44126C8.86388 8.84875 4.93684 13.6756 2.62788 19.3128C0.318923 24.95 -0.268478 31.1448 0.939807 37.1154C2.14809 43.0861 5.09791 48.5651 9.41702 52.8609C15.1418 58.5883 22.9024 61.8145 31.0003 61.8334C39.1779 61.8334 47.0204 58.5849 52.8028 52.8025C58.5852 47.0202 61.8337 39.1776 61.8337 31.0001C61.8337 30.1823 61.5088 29.3981 60.9306 28.8198C60.3524 28.2416 59.5681 27.9167 58.7503 27.9167Z" fill="url(#paint1_linear_326_14)"/>
                  <defs>
                    <linearGradient id="paint0_linear_326_14" x1="31.6324" y1="31.9542" x2="56.9327" y2="16.7542" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#00B9E9"/>
                      <stop offset="1" stop-color="#45D9FF"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_326_14" x1="22" y1="39" x2="68" y2="16" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#00B9E9"/>
                      <stop offset="1" stop-color="#45D9FF"/>
                    </linearGradient>
                  </defs>
                </svg>
                <article>
                    <app-paragrafo>Metodologia Exclusiva</app-paragrafo>
                    <app-paragrafo>Foco em Resultados</app-paragrafo>
                    <app-paragrafo>Integração entre Pessoas e Processos</app-paragrafo>
                    <app-paragrafo>Implantação on the Job</app-paragrafo>
                    <app-paragrafo>Soluções Personalizadas</app-paragrafo>
                </article>
            </aside>
        </section>
        
        `;
    }
}
customElements.define('diferenciais-section', DiferenciaisSection);

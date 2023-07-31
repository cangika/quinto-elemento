import { LitElement, html, css } from 'lit';

export class Forma2 extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
               
            }

            svg {
                width: 548.685px;
                height: 452.188px;
                flex-shrink: 0;

                position: absolute;

                fill: linear-gradient(126deg, #102981 0%, #0A1C3A 100%);
            }
        `
    ];

    render() {
        return html`
        <svg xmlns="http://www.w3.org/2000/svg" width="549" height="453" viewBox="0 0 549 453" fill="none">
  <path d="M495.18 23.0746C363.388 -12.1961 411.685 109.188 132.866 11.7943C-145.953 -85.5989 100.633 452.188 100.633 452.188H473.811C473.811 452.188 626.972 58.3453 495.18 23.0746Z" fill="url(#paint0_linear_156_166)"/>
  <defs>
    <linearGradient id="paint0_linear_156_166" x1="454.869" y1="114.387" x2="120.191" y2="87.0107" gradientUnits="userSpaceOnUse">
      <stop stop-color="#102981"/>
      <stop offset="1" stop-color="#0A1C3A"/>
    </linearGradient>
  </defs>
</svg>
        
        `;
    }
}
customElements.define('app-forma2', Forma2);

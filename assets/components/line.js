import { LitElement, html, css } from 'lit';

export class Line extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }

            svg {
                width: 0px;
                height: 227px;
                transform: rotate(-90deg);
            }
        `
    ];

    render() {
        return html`

        <svg xmlns="http://www.w3.org/2000/svg" width="229" height="2" viewBox="0 0 229 2" fill="none">
  <path d="M228 1L0.999998 1" stroke="white" stroke-width="0.5" stroke-linecap="round"/>
</svg>

        `;
    }
}
customElements.define('app-line', Line);

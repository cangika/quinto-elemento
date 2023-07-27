import { LitElement, html, css } from 'lit';

export class CapaSection extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }

            section {
                display: flex;
                width: 360px;
                height: 640px;
                padding-top: 110px;
                justify-content: center;
                align-items: flex-start;
                align-content: flex-start;
                gap: 66px 1px;
                flex-shrink: 0;
                flex-wrap: wrap;
            }

            span {
                display: flex;
                width: 360px;
                height: 324px;
                padding: 67px 43px;
                flex-direction: column;
                align-items: center;
                gap: 60px;
                flex-shrink: 0;
                background: linear-gradient(90deg, #0A1C3A 0%, #1A658F 57.50%, #00B9E9 100%);
            }
        `
    ];

    render() {
        return html``;
    }
}
customElements.define('capa-section', CapaSection);

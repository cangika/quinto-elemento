import { LitElement, html, css } from 'lit';

export class Forma extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;

                width: 360px;
                max-width: 1024px;
                height: 383px;
                flex-shrink: 0;
                background: linear-gradient(90deg, #494949 0%, #2F2F2F 100%);;
            }

        `
    ];

    render() {
        return html`
        
        
        `;
    }
}
customElements.define('app-forma', Forma);

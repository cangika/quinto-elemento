import { LitElement, html, css } from 'lit';

export class Navbar extends LitElement {
    static styles = [
        css`
            :host {
                width: 100%;
                box-sizing: border-box;

                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 2rem;

                position: fixed;
                top: 0;
                left: 0;
                z-index: 100;
                mix-blend-mode: difference;

                transition: top 1s;
                pointer-events: none;
            }
        `
    ];

    render() {
        return html`
        <img src="logo-vertical.png" alt="logo QE">
        <feather-icon icon="menu" @click=${nav.abrir}></feather-icon>
        
        `;
    }
}
customElements.define('app-navbar', Navbar);

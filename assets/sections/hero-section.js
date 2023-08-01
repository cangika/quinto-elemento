import { LitElement, html, css } from 'lit';
import { section } from '../styles/section-styles';

export class HeroSection extends LitElement {
    static styles = [
        section,
        css`
            :host {
                display: flex;
            }

            svg {
                position: absolute;
                z-index: -10;
                right: 0px;
                top: 0px;
            }

            app-titulo {
                color: white;
                text-align: center;
                font-size: 32px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }
        `
    ];

    render() {
        return html`
        <app-titulo></app-titulo>
        <svg width="360" height="641" viewBox="0 0 360 641" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M352.445 75H-7.55551C-7.55551 75 -35.5556 674 -7.55551 580C20.4446 486 260.445 754 352.445 580C444.445 406 352.445 75 352.445 75Z" fill="url(#paint0_linear_343_368)"/>
            <path d="M358.445 40H-1.55551C-1.55551 40 -29.5556 639 -1.55551 545C26.4446 451 266.445 719 358.445 545C450.445 371 358.445 40 358.445 40Z" fill="url(#paint1_linear_343_368)"/>
            <path d="M11.8889 22H371.889C371.889 22 399.889 621 371.889 527C343.889 433 103.889 701 11.8889 527C-80.1111 353 11.8889 22 11.8889 22Z" fill="url(#paint2_linear_343_368)"/>
            <path d="M0.888874 -20H360.889C360.889 -20 388.889 579 360.889 485C332.889 391 92.8889 659 0.888885 485C-91.1111 311 0.888874 -20 0.888874 -20Z" fill="url(#paint3_linear_343_368)"/>
            <defs>
                <linearGradient id="paint0_linear_343_368" x1="71.6048" y1="352.616" x2="171.94" y2="608.259" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#003662"/>
                    <stop offset="1" stop-color="#47B7E9"/>
                </linearGradient>
<linearGradient id="paint1_linear_343_368" x1="-13.5456" y1="298.885" x2="386.124" y2="304.688" gradientUnits="userSpaceOnUse">
    <stop stop-color="#005788"/>
    <stop offset="0.341818" stop-color="#1078AB"/>
    <stop offset="1" stop-color="#1F97CD"/>
</linearGradient>
<linearGradient id="paint2_linear_343_368" x1="-13.5456" y1="298.885" x2="386.124" y2="304.688" gradientUnits="userSpaceOnUse">
    <stop stop-color="#0A32BE"/>
    <stop offset="1" stop-color="#3083FF"/>
</linearGradient>
<linearGradient id="paint3_linear_343_368" x1="-15.1112" y1="253" x2="360.889" y2="259" gradientUnits="userSpaceOnUse">
    <stop stop-color="#0C1C53"/>
    <stop offset="1" stop-color="#0A32BE"/>
</linearGradient>
</defs>
</svg>
        `;
    }
}
customElements.define('hero-section', HeroSection);

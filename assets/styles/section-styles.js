import { css } from 'lit';

export const section = css`
            :host {
                display: flex;
                width: 100%;
                max-width: 768px;
                height: 100svh;
                box-sizing: border-box;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                flex-shrink: 0;
                margin: 0;
                padding: 1rem;

                overflow: hidden;
                position: relative;
            }
        `;
import { css } from 'lit';

export const section = css`
            :host {
                display: flex;
                width: 100%;
                max-width: 1768px;
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

            button:hover,
            button:active,
            a:hover,
            a:active {
    
                background-color: color-mix(in srgb, white 15%, var(--button-background, var(--tom-2)));
                color: var(--tom-1);
            }
        `;
import { body, html } from '../lib/utils';

body.innerHTML += html`<main id="main-container"></main>`;

export const main = document.getElementById('main-container') as HTMLElement;

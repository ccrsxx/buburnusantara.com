import { body, html } from '../lib/utils';

body.innerHTML += html`
  <main id="main-container">
    <div
      class="absolute -z-10 min-h-screen w-full bg-[url(/assets/home-background.webp)] bg-center"
    ></div>
  </main>
`;

export const main = document.getElementById('main-container') as HTMLElement;

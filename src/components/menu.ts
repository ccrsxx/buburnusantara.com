import { html } from '../lib/utils';
import { main } from './main';

const menuButtons = ['breakfast', 'lunch', 'dinner'] as const;

main.innerHTML += html`
  <section
    id="menu"
    class="hidden-section grid min-h-screen content-center justify-items-center gap-8"
    data-index="3"
  >
    <div
      class="animated-element fade-bottom grid content-center gap-4 text-center 
             [&>p]:text-lg [&>p]:text-[#b8b8b8]"
    >
      <h2 class="font-poppins text-6xl font-bold text-black">Delicious Menu</h2>
      <p class="max-w-xl justify-self-center text-xl font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        aliquid unde rem odio dolor quae illum reiciendis quia similique
        voluptates in, eos optio voluptatem. Dolorum quis eaque delectus nostrum
        nemo.
      </p>
    </div>
    <div class="grid gap-8">
      <div class="flex items-center gap-4">
        ${menuButtons.reduce(
          (acc, menuButton) =>
            acc +
            html`
              <button id=${menuButton} class="menu-button">
                ${menuButton}
              </button>
            `,
          ''
        )}
      </div>
      <div id="menu-container"></div>
    </div>
  </section>
`;

import { html } from '../lib/utils';
import { dialog } from './ui/dialog';
import { main } from './main';

main.innerHTML += html`
  <section id="home" class="hidden-section py-0" data-index="0">
    <div
      id="main-title"
      class="grid min-h-screen place-content-center 
             justify-items-center gap-12 pt-10 text-center"
    >
      <h1 class="animated-element fade-bottom font-poppins text-7xl font-bold">
        Welcome to Bubur
      </h1>
      <h2
        class="animated-element fade-bottom text-xl font-light text-white/70 delay-100"
      >
        Come and eat well with our delicious & healthy foods.
      </h2>
      ${dialog}
      <div class="animated-element fade-bottom delay-200">
        <button
          id="reservation-open-button"
          class="border-2 border-white px-8 py-4 font-poppins transition-colors
                 duration-200 hover:bg-white hover:text-black"
        >
          Reservation
        </button>
      </div>
    </div>
  </section>
`;

import { html } from '../lib/utils';
import { ReservationModal } from './core/reservation-modal';

export function Home(): string {
  return html`
    <section
      id="home"
      class="hidden-section grid min-h-screen content-center gap-12 bg-gray-800 
             bg-[url(/assets/home-background.webp)] bg-center py-0 pt-10 text-center"
      data-index="0"
    >
      <h1
        class="animated-element fade-bottom font-poppins text-7xl font-bold text-white"
      >
        Welcome to Bubur
      </h1>
      <h2
        class="animated-element fade-bottom text-xl font-light text-white/70 delay-100"
      >
        Come and eat well with our delicious & healthy foods.
      </h2>
      ${ReservationModal()}
      <div class="animated-element fade-bottom delay-200">
        <button
          id="reservation-open-button"
          class="border-2 border-white/80 px-8 py-4 font-poppins text-white transition-colors
                 duration-200 hover:border-white hover:bg-white hover:text-black"
        >
          Reservation
        </button>
      </div>
    </section>
  `;
}

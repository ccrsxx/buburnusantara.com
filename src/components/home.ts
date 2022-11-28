import { html } from '@lib/utils';

export function Home(): string {
  return html`
    <section
      id="home"
      class="hidden-section grid min-h-screen content-center gap-12 bg-gray-800 bg-[url(/assets/home-background.webp)] bg-cover
             bg-fixed bg-center py-0 pt-10 text-center before:pointer-events-none before:absolute before:inset-0 before:bg-black/20"
      data-index="0"
    >
      <h1
        class="animated-element fade-bottom font-poppins text-7xl font-bold text-white"
      >
        Welcome to Bubur
      </h1>
      <h2
        class="animated-element fade-bottom fade-delay-100 text-xl font-light text-white/90"
      >
        Come and eat well with our delicious & healthy foods.
      </h2>
      <div class="animated-element fade-bottom fade-delay-200">
        <button
          id="reservation-modal-open-button"
          class="rounded border-2 border-white/80 px-8 py-4 font-poppins font-bold uppercase text-white
                 transition-colors duration-200 hover:border-white hover:bg-white hover:text-black"
        >
          Reserve a table
        </button>
      </div>
    </section>
  `;
}

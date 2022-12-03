import { html } from '@lib/utils';

export function Home(): string {
  return html`
    <section
      id="home"
      class="hidden-section grid h-screen content-center gap-8 bg-main-background bg-[url(/assets/home-background.webp)] 
             bg-cover bg-fixed bg-center py-0 pt-10 text-center before:pointer-events-none before:absolute before:inset-0 
             before:h-screen before:bg-black/20 sm:gap-12"
      data-index="0"
    >
      <div id="home-intersect-point" class="absolute top-24 h-10 w-10"></div>
      <h1
        class="animated-element fade-bottom font-poppins text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl"
      >
        Welcome to Bubur Nusantara
      </h1>
      <h2
        class="animated-element fade-bottom fade-delay-100 text-xl font-light text-white/90"
      >
        Bubur Ter-yummiest in Town
      </h2>
      <div class="animated-element fade-bottom fade-delay-200">
        <button
          id="reservation-modal-open-button"
          class="smooth-tab w-full rounded border-2 border-white/80 px-8 py-4 font-poppins font-bold uppercase text-white
                 transition-colors duration-200 hover:border-white hover:bg-white hover:text-black 
                 focus-visible:border-white focus-visible:bg-white focus-visible:text-black sm:w-auto"
        >
          Reserve a table
        </button>
      </div>
    </section>
  `;
}

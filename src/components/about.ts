import { html } from '@lib/utils';

export function About(): string {
  return html`
    <section
      id="about"
      class="hidden-section grid place-items-center"
      data-index="1"
    >
      <div
        class="main-container flex flex-col items-center justify-between 
               gap-8 lg:flex-row lg:gap-4"
      >
        <div
          class="animated-element fade-left grid max-w-2xl gap-4 lg:max-w-md [&>p]:text-lg"
        >
          <h2 class="section-title mb-4 text-center lg:text-left">Welcome</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            aliquid unde rem odio dolor quae illum reiciendis quia similique
            voluptates in, eos optio voluptatem. Dolorum quis eaque delectus
            nostrum nemo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            est, ab suscipit quis voluptates ut, alias fugiat architecto
            corporis voluptatum asperiores obcaecati iste nemo eius ea maxime
            optio officiis hic.
          </p>
        </div>
        <img
          class="animated-element fade-right viewable-image h-72 w-[448px]
                 rounded-md object-cover duration-500 xl:h-96 xl:w-[576px]"
          src="/assets/about-chef.webp"
          alt="Chef"
        />
      </div>
    </section>
  `;
}

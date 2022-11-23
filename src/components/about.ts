import { html } from '../lib/utils';
import { main } from './main';

main.innerHTML += html`
  <section
    id="about"
    class="hidden-section flex items-center justify-center gap-40"
    data-index="1"
  >
    <div
      class="animated-element fade-bottom grid max-w-md gap-4 
             [&>p]:text-lg [&>p]:text-[#b8b8b8]"
    >
      <h4 class="tracking-widest text-[#d4d4d4]">OUR STORY</h4>
      <h2 class="mb-4 font-poppins text-6xl font-bold text-black">Welcome</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        aliquid unde rem odio dolor quae illum reiciendis quia similique
        voluptates in, eos optio voluptatem. Dolorum quis eaque delectus nostrum
        nemo.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas est,
        ab suscipit quis voluptates ut, alias fugiat architecto corporis
        voluptatum asperiores obcaecati iste nemo eius ea maxime optio officiis
        hic.
      </p>
    </div>
    <img
      class="animated-element fade-right h-72 w-[448px] rounded-md"
      src="/bubur-nusantara/assets/about-background.webp"
      alt="Chef"
    />
  </section>
`;

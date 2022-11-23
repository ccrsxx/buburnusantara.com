import { main } from './main';

main.innerHTML += /* html */ `
  <section id="about">
    <div
      class="section-hide flex items-center justify-center gap-40"
      data-index="1"
    >
      <div
        class="animated-element grid max-w-md animate-[fadeFromBottom_500ms_forwards] gap-8"
      >
        <div class="grid gap-4 [&>p]:text-[#b8b8b8] [&>p]:text-lg">
          <h4 class="tracking-widest text-[#d4d4d4]">OUR STORY</h4>
          <h2 class="mb-4 font-poppins text-6xl font-bold text-black">
            Welcome
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio aliquid unde rem odio dolor quae illum reiciendis
            quia similique voluptates in, eos optio voluptatem. Dolorum quis
            eaque delectus nostrum nemo.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptas est, ab suscipit quis voluptates ut, alias fugiat
            architecto corporis voluptatum asperiores obcaecati iste nemo
            eius ea maxime optio officiis hic.
          </p>
        </div>
      </div>
      <img
        class="animated-element h-72 w-[448px] animate-[fadeFromRight_500ms_forwards] rounded-md"
        src="/assets/about-background.webp"
        alt="Chef"
      />
    </div>
  </section>
`;

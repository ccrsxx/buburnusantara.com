import { main } from './main';

main.innerHTML += /* html */ `
  <section id="offer">
    <div
      class="section-hide grid justify-items-center gap-8"
      data-index="2"
    >
      <div
        class="animated-element grid animate-[fadeFromBottom_500ms_forwards] gap-4 [&>p]:text-lg"
      >
        <div class="grid gap-4 text-center [&>p]:text-[#b8b8b8]">
          <h2 class="font-poppins text-6xl font-bold text-black">
            Delicious Menu
          </h2>
          <p class="max-w-md justify-self-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio aliquid unde rem odio dolor quae illum reiciendis
            quia similique voluptates in, eos optio voluptatem. Dolorum quis
            eaque delectus nostrum nemo.
          </p>
        </div>
      </div>
    </div>
  </section>
`;

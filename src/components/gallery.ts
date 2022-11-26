import { html } from '@lib/utils';

type ProductImage = Record<'name' | 'image', string>;

const productImages: Readonly<ProductImage[]> = [
  {
    name: 'Breakfast 1',
    image: '/assets/menu/breakfast/breakfast-1.webp'
  },
  {
    name: 'Breakfast 2',
    image: '/assets/menu/breakfast/breakfast-2.webp'
  },
  {
    name: 'Breakfast 3',
    image: '/assets/menu/breakfast/breakfast-3.webp'
  }
];

const placeholderProductImages = [...(Array(2) as undefined[])].reduce(
  (acc) => [...acc, ...productImages],
  [] as ProductImage[]
);

export function Gallery(): string {
  return html`
    <section
      id="gallery"
      class="hidden-section grid justify-center gap-12 bg-[#f8f9fa]"
      data-index="4"
    >
      <div
        class="animated-element fade-bottom grid gap-4 text-center 
               [&>p]:text-lg [&>p]:text-[#b8b8b8]"
      >
        <h2 class="font-poppins text-6xl font-bold text-black">Gallery</h2>
        <p class="max-w-2xl justify-self-center text-xl font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          aliquid unde rem odio dolor quae illum reiciendis quia similique
          voluptates in, eos optio voluptatem. Dolorum quis eaque delectus
          nostrum nemo.
        </p>
      </div>
      <div
        class="animated-element fade-bottom grid w-full max-w-6xl grid-cols-3 gap-4 delay-100"
      >
        ${placeholderProductImages.reduce(
          (acc, { name, image }) =>
            acc +
            html`
              <img
                class="viewable-image cursor-pointer rounded-md"
                src="${image}"
                alt="${name}"
              />
            `,
          ''
        )}
      </div>
    </section>
  `;
}

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
      class="hidden-section grid auto-cols-fr justify-items-center gap-12"
      data-index="4"
    >
      <div class="animated-element fade-bottom grid gap-4 text-center">
        <h2 class="section-title">Gallery</h2>
        <p class="section-subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          aliquid unde rem odio dolor quae illum reiciendis quia similique
          voluptates in, eos optio voluptatem. Dolorum quis eaque delectus
          nostrum nemo.
        </p>
      </div>
      <div
        class="animated-element fade-bottom main-container fade-delay-100
               grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 sm:gap-4"
      >
        ${placeholderProductImages.reduce(
          (acc, { name, image }) =>
            acc +
            html`
              <img
                class="viewable-image h-full w-full cursor-pointer rounded-md object-contain"
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

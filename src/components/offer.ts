import { html } from '@lib/utils';
import { OfferCard } from './common/offer-card';
import type { Product } from '@lib/types/product';

const offers: Readonly<Product[]> = [
  {
    name: 'Beef with Sausage',
    price: 240_000,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ut necessitatibus obcaecati nobis suscipitiste, blanditiis quam explicabo doloremque eveniet.',
    image: '/assets/offer/offer-1.webp'
  },
  {
    name: 'Eggs with Garlic',
    price: 450_000,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ut necessitatibus obcaecati nobis suscipitiste, blanditiis quam explicabo doloremque eveniet.',
    image: '/assets/offer/offer-2.webp'
  },
  {
    name: 'Beef Ribs',
    price: 150_000,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ut necessitatibus obcaecati nobis suscipitiste, blanditiis quam explicabo doloremque eveniet.',
    image: '/assets/offer/offer-3.webp'
  }
];

const placeholderOffers = [...(Array(3) as undefined[])].reduce(
  (acc) => [...acc, ...offers],
  [] as Product[]
);

export function Offer(): string {
  return html`
    <section
      id="offer"
      class="hidden-section grid gap-12 bg-[#f8f9fa]"
      data-index="2"
    >
      <div
        class="animated-element fade-bottom grid gap-4 text-center 
              [&>p]:text-lg [&>p]:text-[#b8b8b8]"
      >
        <h4 class="tracking-widest text-[#d4d4d4]">OUR OFFERS</h4>
        <h2 class="font-poppins text-6xl font-bold text-black">
          Our Offer This Summer
        </h2>
        <p class="max-w-2xl justify-self-center text-xl font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          aliquid unde rem odio dolor quae illum reiciendis quia similique
          voluptates in, eos optio voluptatem. Dolorum quis eaque delectus
          nostrum nemo.
        </p>
      </div>
      <div
        class="swiper animated-element fade-bottom main-container fade-delay-100 !pb-12"
      >
        <div class="swiper-wrapper cursor-grab select-none">
          ${placeholderOffers.reduce(
            (acc, product, index) => acc + OfferCard({ ...product, index }),
            ''
          )}
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </section>
  `;
}

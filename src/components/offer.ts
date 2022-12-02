import { html } from '@lib/utils';
import { OfferCard } from './common/offer-card';
import type { Product } from '@lib/types/product';

const offers: Readonly<Product[]> = [
  {
    name: 'Bubur Ayam Kampung',
    price: 25_000,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ut necessitatibus obcaecati nobis suscipitiste, blanditiis quam explicabo doloremque eveniet.',
    image: '/assets/offer/offer-2.jpg'
  },
  {
    name: 'Bubur Polos',
    price: 18_000,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ut necessitatibus obcaecati nobis suscipitiste, blanditiis quam explicabo doloremque eveniet.',
    image: '/assets/offer/offer-1.jpg'
  },
  {
    name: 'Telur Asin',
    price: 8_000,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ut necessitatibus obcaecati nobis suscipitiste, blanditiis quam explicabo doloremque eveniet.',
    image: '/assets/offer/offer-3.jpg'
  }
];

export function Offer(): string {
  return html`
    <section id="offer" class="hidden-section grid gap-12" data-index="2">
      <div class="animated-element fade-bottom grid gap-4 text-center">
        <h2 class="section-title">Our Offer This Summer</h2>
        <p class="section-subtitle">
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
          ${offers.reduce(
            (acc, product, index) => acc + OfferCard({ ...product, index }),
            ''
          )}
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </section>
  `;
}

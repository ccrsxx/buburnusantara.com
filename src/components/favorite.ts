import { html } from '@lib/utils';
import { favorites } from '@constants/favorite';
import { OfferCard } from './common/offer-card';

export function Favorite(): string {
  return html`
    <section id="favorite" class="hidden-section grid gap-12" data-index="2">
      <div class="animated-element fade-bottom grid gap-4 text-center">
        <h2 class="section-title">Menu Favorit</h2>
        <p class="section-subtitle">
          Ini adalah menu favorit yang sangat disukai oleh pelanggan kami.
          Perpaduan bubur kami dengan telur asin pilihan menghasilkan rasa yang
          dipercaya oleh banyak pelanggan kami
        </p>
      </div>
      <div
        class="swiper animated-element fade-bottom main-container fade-delay-100 !pb-12"
      >
        <div class="swiper-wrapper cursor-grab select-none">
          ${favorites.reduce(
            (acc, product, index) => acc + OfferCard({ ...product, index }),
            ''
          )}
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </section>
  `;
}

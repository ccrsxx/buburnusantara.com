import { html } from '../../lib/utils';
import { formatCurrency } from '../../lib/format';
import type { Product } from '../../lib/types/product';

type OfferCardProps = Product & {
  index: number;
};

export function OfferCard({
  name,
  price,
  image,
  index,
  description
}: OfferCardProps): string {
  const indexOfThree = index % 3;

  return html`
    <div
      class="swiper-slide animated-element fade-bottom
      ${!indexOfThree
        ? 'delay-100'
        : indexOfThree === 1
        ? 'delay-200'
        : 'delay-300'}
        opacity-100"
    >
      <img class="h-52 w-full rounded-t-md" src="${image}" alt="${name}" />
      <div class="grid gap-2 p-8 text-center">
        <h5 class="font-poppins text-xl text-[#FDA403]">
          ${formatCurrency(price)}
        </h5>
        <h5 class="font-poppins text-2xl font-bold text-black">${name}</h5>
        <p>${description}</p>
      </div>
    </div>
  `;
}

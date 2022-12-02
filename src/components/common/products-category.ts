import { html } from '@lib/utils';
import { formatCurrency } from '@lib/format';
import type { Menu } from '@lib/types/menu';
import type { Product } from '@lib/types/product';

type ProductCategoryProps = {
  category: Menu;
  products: Product[];
};

export function ProductsCategory({
  category,
  products
}: ProductCategoryProps): string {
  return html`
    <div
      style="display: none;"
      class="menu-category animated-element fade-bottom fade-delay-400"
      data-category="${category}"
    >
      ${products.reduce(
        (acc, { name, price, image, description }) =>
          acc +
          html`
            <div class="grid grid-cols-[auto,1fr] gap-4">
              <img
                class="viewable-image h-20 w-20 rounded-full object-cover sm:h-28 sm:w-28"
                src="${image}"
                alt="${name}"
              />
              <div class="grid gap-2">
                <h3
                  class="font-poppins text-lg font-bold text-black sm:text-xl"
                >
                  ${name}
                </h3>
                <p>${description}</p>
                <p class="font-poppins text-xl text-accent-orange sm:text-2xl">
                  ${formatCurrency(price)}
                </p>
              </div>
            </div>
          `,
        ''
      )}
    </div>
  `;
}

import { html } from '@lib/utils';
import { formatCurrency } from '@lib/format';
import type { Menu } from '@lib/types/menu';
import type { Product } from '@lib/types/product';

type ProductCategoryProps = {
  category: Menu;
  products: Product[];
};

export function ProductCategory({
  category,
  products
}: ProductCategoryProps): string {
  return html`
    <div
      id=${category}
      style="display: none;"
      class="menu-category animated-element fade-bottom"
    >
      ${products.reduce(
        (acc, { name, price, image, description }) =>
          acc +
          html`
            <div class="grid grid-cols-[auto,1fr] gap-4">
              <img class="h-28 w-28 rounded-full" src=${image} alt=${name} />
              <div class="grid gap-2">
                <h6 class="font-poppins text-xl font-bold text-black">
                  ${name}
                </h6>
                <p>${description}</p>
                <h5 class="font-poppins text-2xl text-[#FDA403]">
                  ${formatCurrency(price)}
                </h5>
              </div>
            </div>
          `,
        ''
      )}
    </div>
  `;
}

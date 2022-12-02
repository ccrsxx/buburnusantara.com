import { html } from '@lib/utils';
import { ProductsCategory } from './common/products-category';
import type { Menu } from '@lib/types/menu';
import type { Product } from '@lib/types/product';

const menus: Readonly<Menu[]> = ['breakfast', 'lunch', 'dinner'];

const placeholderMenus: Readonly<Product[]> = [
  {
    name: 'Salted Fried Chicken',
    price: 420_000,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ut necessitatibus obcaecati nobis suscipitiste, blanditiis quam explicabo doloremque eveniet.',
    image: '/assets/menu/breakfast/breakfast-1.webp'
  },
  {
    name: 'Italian Sauce Mushroom',
    price: 320_000,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ut necessitatibus obcaecati nobis suscipitiste, blanditiis quam explicabo doloremque eveniet.',
    image: '/assets/menu/breakfast/breakfast-2.webp'
  },
  {
    name: 'Fried Potato with Garlic',
    price: 150_000,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ut necessitatibus obcaecati nobis suscipitiste, blanditiis quam explicabo doloremque eveniet.',
    image: '/assets/menu/breakfast/breakfast-3.webp'
  }
];

type Category = { category: Menu; products: Product[] };

const clonedPlaceholderMenus = [...(Array(2) as undefined[])].reduce(
  (acc) => [...acc, ...placeholderMenus],
  [] as Product[]
);

const allMenus: Readonly<Category[]> = [
  {
    category: 'breakfast',
    products: clonedPlaceholderMenus
  },
  {
    category: 'lunch',
    products: clonedPlaceholderMenus
  },
  {
    category: 'dinner',
    products: clonedPlaceholderMenus
  }
];

export function Menu(): string {
  return html`
    <section
      id="menu"
      class="hidden-section grid min-h-screen content-center justify-items-center gap-12"
      data-index="3"
    >
      <div
        class="animated-element fade-bottom grid content-center gap-4 text-center"
      >
        <h2 class="section-title">Delicious Menu</h2>
        <p class="section-subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          aliquid unde rem odio dolor quae illum reiciendis quia similique
          voluptates in, eos optio voluptatem. Dolorum quis eaque delectus
          nostrum nemo.
        </p>
      </div>
      <div class="flex flex-wrap items-center justify-center gap-4">
        ${menus.reduce((acc, menu, index) => {
          const indexOfThree = index % 3;

          return (
            acc +
            html`
              <div
                class="animated-element fade-bottom
                  ${!indexOfThree
                  ? 'fade-delay-100'
                  : indexOfThree === 1
                  ? 'fade-delay-200'
                  : 'fade-delay-300'}"
              >
                <button class="menu-button smooth-tab" id="${menu}">
                  ${menu}
                </button>
              </div>
            `
          );
        }, '')}
      </div>
      <div class="main-container">
        ${allMenus.reduce(
          (acc, { category, products }) =>
            acc + ProductsCategory({ category, products }),
          ''
        )}
      </div>
    </section>
  `;
}

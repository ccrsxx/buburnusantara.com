import { html } from '../lib/utils';
import { formatCurrency } from '../lib/format';
import type { Menu } from '../lib/types/menu';
import type { Product } from '../lib/types/product';

const menuButtons: Readonly<Menu[]> = ['breakfast', 'lunch', 'dinner'];

const placeholderMenus: Product[] = [
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
type AllMenus = Category[];

const clonedPlaceholderMenus = [...(Array(2) as undefined[])].reduce(
  (acc) => [...acc, ...placeholderMenus],
  [] as Product[]
);

const allMenus: AllMenus = [
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
        class="animated-element fade-bottom grid content-center gap-4 text-center 
             [&>p]:text-lg [&>p]:text-[#b8b8b8]"
      >
        <h2 class="font-poppins text-6xl font-bold text-black">
          Delicious Menu
        </h2>
        <p class="max-w-2xl justify-self-center text-xl font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          aliquid unde rem odio dolor quae illum reiciendis quia similique
          voluptates in, eos optio voluptatem. Dolorum quis eaque delectus
          nostrum nemo.
        </p>
      </div>
      <div class="flex items-center justify-center gap-4">
        ${menuButtons.reduce((acc, menuButton, index) => {
          const indexOfThree = index % 3;

          return (
            acc +
            html`
              <button
                id=${menuButton}
                class="menu-button animated-element fade-bottom
                  ${!indexOfThree
                  ? 'delay-100'
                  : indexOfThree === 1
                  ? 'delay-200'
                  : 'delay-300'}"
              >
                ${menuButton}
              </button>
            `
          );
        }, '')}
      </div>
      <div id="menu-container">
        ${allMenus.slice(0, 1).reduce(
          (acc, { category, products }) =>
            acc +
            html`
              <div id=${category} class="grid max-w-6xl grid-cols-2 gap-8">
                ${products.reduce(
                  (acc, { name, price, image, description }) =>
                    acc +
                    html`
                      <div
                        class="fade-bottom animated-element grid 
                             grid-cols-[auto,1fr] gap-4 delay-[400ms]"
                      >
                        <img
                          class="h-28 w-28 rounded-full"
                          src=${image}
                          alt=${name}
                        />
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
            `,
          ''
        )}
      </div>
    </section>
  `;
}

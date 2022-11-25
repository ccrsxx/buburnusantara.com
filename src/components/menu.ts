import { html } from '../lib/utils';
import { MenuButton } from './core/menu-button';
import { ProductCategory } from './core/product-category';
import type { Menu } from '../lib/types/menu';
import type { Product } from '../lib/types/product';

const menus: Readonly<Menu[]> = ['breakfast', 'lunch', 'dinner'];

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
        ${menus.reduce(
          (acc, menu, index) => acc + MenuButton({ menu, index }),
          ''
        )}
      </div>
      <div>
        ${allMenus.reduce(
          (acc, { category, products }) =>
            acc + ProductCategory({ category, products }),
          ''
        )}
      </div>
    </section>
  `;
}

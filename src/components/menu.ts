import { html } from '@lib/utils';
import { ProductsCategory } from './common/products-category';
import type { Menu } from '@lib/types/menu';
import type { Product } from '@lib/types/product';

const menus: Readonly<Menu[]> = ['utama', 'topping', 'minuman'];

type Category = { category: Menu; products: Product[] };

const allMenus: Readonly<Category[]> = [
  {
    category: 'utama',
    products: [
      {
        name: 'Bubur Ayam Kampung',
        price: 25_000,
        description:
          'Bubur dengan daging ayam pilihan ditambah cakwe, dibalur dengan minyak wijen impor yang spesial dibuat di Malaysia menghasilkan bubur yang bukan hanya mengenyangkan, tetapi juga bermakna di hati.',
        image: '/assets/menu/utama/utama-1.jpg'
      },
      {
        name: 'Bubur Polos',
        price: 18_000,
        description:
          'Bubur polos yang diproses dengan kaldu ayam kampung pilihan, dipadu dengan minyak wijen pilihan menghasilkan bubur yang sangat bernutrisi dan nikmat',
        image: '/assets/menu/utama/utama-2.jpg'
      }
    ]
  },
  {
    category: 'topping',
    products: [
      {
        name: 'Telur Asin',
        price: 8_000,
        description:
          'Telur Bebek yang dipilih dengan hati dan diasinkan dengan rasa yang pas menghasilkan telur asin yang berkualitas tinggi',
        image: '/assets/menu/topping/topping-1.jpg'
      },
      {
        name: 'Telur Ayam Kampung',
        price: 8_000,
        description:
          'Telur Ayam Kampung yang dipilih dengan hati, sehingga enak disantap mentah maupun matang',
        image: '/assets/menu/topping/topping-2.jpg'
      },
      {
        name: 'Ati Ampela',
        price: 7_000,
        description:
          'Ati dan Ampela ayam yang di rebus dengan rempah pilihan sehingga sangat pas disantap bersama bubur',
        image: '/assets/menu/topping/topping-3.jpg'
      },
      {
        name: 'Cakwe',
        price: 6_000,
        description:
          'Cakwe yang di goreng dan diberi bumbu pilihan sehingga beraroma khas yang mengharumkan',
        image: '/assets/menu/topping/topping-4.jpg'
      },
      {
        name: 'Kulit Ayam Kriuk',
        price: 6_000,
        description:
          'Kulit ayam yang digoreng dengan bumbu dan rempah pilihan sangat nikmat disajikan bersama bubur',
        image: '/assets/menu/topping/topping-5.jpg'
      },
      {
        name: 'Telur Ayam Rebus',
        price: 6_000,
        description:
          'Telur ayam negeri yang sangat cocok dissantap selagi hangat',
        image: '/assets/menu/topping/topping-2.jpg'
      },
      {
        name: 'Xtra Ayam Kampung',
        price: 15_000,
        description:
          'Ayam kampung yang dibumbui dengan bumbu khas yang mempunyai pilihan kecap maupun biasa',
        image: '/assets/menu/topping/topping-6.jpg'
      },
      {
        name: 'Krupuk Rengginang',
        price: 15_000,
        description:
          'Krupuk asli Bandung yang digoreng dengan suhu yang pas menghasilkan krupuk yang gurih dan renyah',
        image: '/assets/menu/topping/topping-7.jpg'
      },
      {
        name: 'Krupuk Ikan',
        price: 15_000,
        description:
          'Krupuk yang dibuat dengan ikan asli menghasilkan krupuk yang renyah dan beraroma ikan yang enak',
        image: '/assets/menu/topping/topping-8.jpg'
      },
      {
        name: 'Krupuk Jengkol',
        price: 20_000,
        description: 'Krupuk Vegetarian jengkol yang tidak berbau',
        image: '/assets/menu/topping/topping-9.jpg'
      }
    ]
  },
  {
    category: 'minuman',
    products: [
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
    ]
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

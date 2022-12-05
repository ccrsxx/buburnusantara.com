import type { Menu } from '@lib/types/menu';
import type { Product } from '@lib/types/product';

type Category = { category: Menu; products: Product[] };

export const allMenus: Readonly<Category[]> = [
  {
    category: 'utama',
    products: [
      {
        name: 'Bubur Ayam Kampung',
        price: 25_000,
        description:
          'Bubur dengan daging ayam pilihan ditambah cakwe, dibalur dengan minyak wijen impor yang spesial dibuat di Malaysia menghasilkan bubur yang bukan hanya mengenyangkan, tetapi juga bermakna di hati',
        image: '/assets/menu/utama/utama-1.webp'
      },
      {
        name: 'Bubur Polos',
        price: 18_000,
        description:
          'Bubur polos yang diproses dengan kaldu ayam kampung pilihan, dipadu dengan minyak wijen pilihan menghasilkan bubur yang sangat bernutrisi dan nikmat',
        image: '/assets/menu/utama/utama-2.webp'
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
        image: '/assets/menu/topping/topping-1.webp'
      },
      {
        name: 'Telur Ayam Kampung',
        price: 8_000,
        description:
          'Telur Ayam Kampung yang dipilih dengan hati, sehingga enak disantap mentah maupun matang',
        image: '/assets/menu/topping/topping-2.webp'
      },
      {
        name: 'Ati Ampela',
        price: 7_000,
        description:
          'Ati dan Ampela ayam yang di rebus dengan rempah pilihan sehingga sangat pas disantap bersama bubur',
        image: '/assets/menu/topping/topping-3.webp'
      },
      {
        name: 'Cakwe',
        price: 6_000,
        description:
          'Cakwe yang di goreng dan diberi bumbu pilihan sehingga beraroma khas yang mengharumkan',
        image: '/assets/menu/topping/topping-4.webp'
      },
      {
        name: 'Kulit Ayam Kriuk',
        price: 6_000,
        description:
          'Kulit ayam yang digoreng dengan bumbu dan rempah pilihan sangat nikmat disajikan bersama bubur',
        image: '/assets/menu/topping/topping-5.webp'
      },
      {
        name: 'Telur Ayam Rebus',
        price: 6_000,
        description:
          'Telur ayam negeri yang sangat cocok dissantap selagi hangat',
        image: '/assets/menu/topping/topping-6.webp'
      },
      {
        name: 'Xtra Ayam Kampung',
        price: 15_000,
        description:
          'Ayam kampung yang dibumbui dengan bumbu dan rempah pilihan menghasilkan rasa asin dan gurih',
        image: '/assets/menu/topping/topping-7.webp'
      },
      {
        name: 'Xtra Ayam Kampung Kecap',
        price: 15_000,
        description:
          'Ayam kampung yang dibumbui dengan perpaduan kecap menghasilkan rasa yang manis dan gurih',
        image: '/assets/menu/topping/topping-8.webp'
      }
    ]
  },
  {
    category: 'lainnya',
    products: [
      {
        name: 'Krupuk Rengginang',
        price: 15_000,
        description:
          'Krupuk asli Bandung yang digoreng dengan suhu yang pas menghasilkan krupuk yang gurih dan renyah',
        image: '/assets/menu/lainnya/lainnya-1.webp'
      },
      {
        name: 'Krupuk Ikan',
        price: 15_000,
        description:
          'Krupuk yang dibuat dengan ikan asli menghasilkan krupuk yang renyah dan beraroma ikan yang enak',
        image: '/assets/menu/lainnya/lainnya-2.webp'
      },
      {
        name: 'Krupuk Jengkol',
        price: 20_000,
        description: 'Krupuk Vegetarian jengkol yang tidak berbau',
        image: '/assets/menu/lainnya/lainnya-3.webp'
      }
    ]
  }
];

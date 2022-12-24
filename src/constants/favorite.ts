import type { Product } from '@lib/types/product';

export const favorites: Readonly<Product[]> = [
  {
    name: 'Bubur Ayam Kampung',
    price: 25_000,
    description:
      'Bubur dengan daging ayam pilihan ditambah cakwe, dibalur dengan minyak wijen impor yang spesial dibuat di Malaysia menghasilkan bubur yang bukan hanya mengenyangkan, tetapi juga bermakna di hati',
    image: '/assets/offer/offer-1.webp'
  },
  {
    name: 'Bubur Polos',
    price: 18_000,
    description:
      'Bubur polos yang diproses dengan kaldu ayam kampung pilihan, dipadu dengan minyak wijen pilihan menghasilkan bubur yang sangat bernutrisi dan nikmat',
    image: '/assets/offer/offer-2.webp'
  },
  {
    name: 'Telur Asin',
    price: 8_000,
    description:
      'Telur Bebek yang dipilih dengan hati dan diasinkan dengan rasa yang pas menghasilkan telur asin yang berkualitas tinggi',
    image: '/assets/offer/offer-3.webp'
  }
];

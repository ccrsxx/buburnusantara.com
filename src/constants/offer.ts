import type { Product } from '@lib/types/product';

export const offers: Readonly<Product[]> = [
  {
    name: 'Bubur Ayam Kampung',
    price: 25_000,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ut necessitatibus obcaecati nobis suscipitiste, blanditiis quam explicabo doloremque eveniet.',
    image: '/assets/offer/offer-2.webp'
  },
  {
    name: 'Bubur Polos',
    price: 18_000,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ut necessitatibus obcaecati nobis suscipitiste, blanditiis quam explicabo doloremque eveniet.',
    image: '/assets/offer/offer-1.webp'
  },
  {
    name: 'Telur Asin',
    price: 8_000,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ut necessitatibus obcaecati nobis suscipitiste, blanditiis quam explicabo doloremque eveniet.',
    image: '/assets/offer/offer-3.webp'
  }
];

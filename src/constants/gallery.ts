type ProductImage = Record<'name' | 'image', string>;

export const productImages: Readonly<ProductImage[]> = [
  {
    name: 'Bubur Ayam Kampung',
    image: '/assets/offer/offer-1.webp'
  },
  {
    name: 'Bubur Polos',
    image: '/assets/offer/offer-2.webp'
  },
  {
    name: 'Telur Asin',
    image: '/assets/menu/topping/topping-1.webp'
  },
  {
    name: 'Telur Ayam Kampung',
    image: '/assets/menu/topping/topping-2.webp'
  },
  {
    name: 'Ati Ampela',
    image: '/assets/menu/topping/topping-3.webp'
  },
  {
    name: 'Cakwe',
    image: '/assets/menu/topping/topping-4.webp'
  }
];

import { html } from '../lib/utils';
import { main } from './main';
import type { Product } from '../lib/types/product';

const offers: Readonly<Product[]> = [
  {
    name: 'Eggs with Garlic',
    price: 29.5,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ut necessitatibus obcaecati nobis suscipitiste, blanditiis quam explicabo doloremque eveniet.',
    image: '/assets/offer-1.webp'
  },
  {
    name: 'Eggs with Garlic',
    price: 29.5,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ut necessitatibus obcaecati nobis suscipitiste, blanditiis quam explicabo doloremque eveniet.',
    image: '/assets/offer-2.webp'
  },
  {
    name: 'Eggs with Garlic',
    price: 29.5,
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ut necessitatibus obcaecati nobis suscipitiste, blanditiis quam explicabo doloremque eveniet.',
    image: '/assets/offer-3.webp'
  }
];

const placeholderOffers = [...(Array(3) as undefined[])].reduce(
  (acc) => [...acc, ...offers],
  [] as Product[]
);

main.innerHTML += html`
  <section
    id="offer"
    class="hidden-section grid justify-items-center gap-8 bg-[#f8f9fa]"
    data-index="2"
  >
    <div
      class="animated-element fade-bottom grid gap-4 text-center 
             [&>p]:text-lg [&>p]:text-[#b8b8b8]"
    >
      <h4 class="tracking-widest text-[#d4d4d4]">OUR OFFERS</h4>
      <h2 class="font-poppins text-6xl font-bold text-black">
        Our Offer This Summer
      </h2>
      <p class="max-w-xl justify-self-center text-xl font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        aliquid unde rem odio dolor quae illum reiciendis quia similique
        voluptates in, eos optio voluptatem. Dolorum quis eaque delectus nostrum
        nemo.
      </p>
    </div>
    <div
      class="swiper animated-element fade-bottom h-full max-w-4xl !pb-12 text-black"
    >
      <div class="swiper-wrapper cursor-grab select-none">
        ${placeholderOffers.reduce(
          (acc, { name, price, image, description }) => {
            // TODO: add staggered animation
            // const indexOfThree = index % 3;
            // 'animated-element fade-bottom ${index === 1 ? 'delay-100' : index === 2 ? 'delay-200' : ''}

            return (
              acc +
              html`
                <div class="swiper-slide">
                  <img class="h-52 rounded-t-md" src="${image}" alt="${name}" />
                  <div class="grid gap-2 p-8 text-center">
                    <h5 class="font-poppins text-[#FDA403]">${price}</h5>
                    <h5 class="font-poppins font-bold">${name}</h5>
                    <p>${description}</p>
                  </div>
                </div>
              `
            );
          },
          ''
        )}
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </section>
`;

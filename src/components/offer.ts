import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, Pagination } from 'swiper';
import { main } from './main';

type Offer = {
  name: string;
  price: number;
  image: string;
  description: string;
};

const offers: Readonly<Offer[]> = [
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
  [] as Offer[]
);

main.innerHTML += /* html */ `
  <section id="offer" class="bg-[#f8f9fa]">
    <div
      class="section-hide grid justify-items-center gap-8"
      data-index="2"
    >
      <div
        class="animated-element grid animate-[fadeFromBottom_500ms_forwards] gap-4 [&>p]:text-lg"
      >
        <div class="grid gap-4 text-center [&>p]:text-[#b8b8b8]">
          <h4 class="tracking-widest text-[#d4d4d4]">OUR OFFERS</h4>
          <h2 class="font-poppins text-6xl font-bold text-black">
            Our Offer This Summer
          </h2>
          <p class="max-w-md justify-self-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio aliquid unde rem odio dolor quae illum reiciendis
            quia similique voluptates in, eos optio voluptatem. Dolorum quis
            eaque delectus nostrum nemo.
          </p>
        </div>
      </div>
      <div class="swiper h-full max-w-4xl !pb-12 text-black">
        <div
          class="swiper-wrapper cursor-grab select-none"
        >
          ${placeholderOffers.reduce(
            (acc, { name, price, image, description }, index) => {
              const indexOfThree = index % 3;

              return (
                acc +
                `
                  <div
                    class="swiper-slide animated-element animate-[fadeFromBottom_${
                      indexOfThree === 0
                        ? '500ms'
                        : indexOfThree === 1
                        ? '600ms'
                        : '700ms'
                    }_forwards]"
                  >
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
    </div>
  </section>
`;

new Swiper('.swiper', {
  modules: [Pagination],
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

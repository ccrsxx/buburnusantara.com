import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, Pagination } from 'swiper';

new Swiper('.swiper', {
  modules: [Pagination],
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 10,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20
    }
  }
});

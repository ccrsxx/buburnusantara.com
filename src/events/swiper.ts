import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, Pagination } from 'swiper';

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

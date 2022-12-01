import {
  navbar,
  navLinks,
  hiddenSections,
  homeIntersectPoint
} from '@lib/elements';

const hiddenSectionsObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      const sectionElement = entry.target as HTMLElement;

      const isSectionIndexExist = sectionElement.dataset.index;
      const sectionIndex =
        isSectionIndexExist !== undefined ? +isSectionIndexExist : null;

      const navElement = sectionIndex !== null ? navLinks[sectionIndex] : null;

      const sectionAnimatedElements: NodeListOf<HTMLElement> =
        sectionElement.querySelectorAll('.animated-element');

      if (entry.isIntersecting) {
        if (navElement && sectionIndex !== null)
          navElement.classList.add('active');

        sectionAnimatedElements.forEach(
          (element) => !element.style.display && element.classList.add('show')
        );
      } else {
        if (navElement) navElement.classList.remove('active');

        sectionAnimatedElements.forEach((element) =>
          element.classList.remove('show')
        );
      }
    }),
  { threshold: window.innerWidth >= 640 ? 0.5 : 0.25 }
);

const homeIntersectPointObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach(({ isIntersecting }) => {
      if (isIntersecting) {
        navbar.classList.remove('scrolled-bottom');
        setTimeout(() => {
          navbar.classList.remove('sleep');
          navbar.classList.remove('scrolled-middle');
        }, 200);
      } else {
        navbar.classList.add('scrolled-middle');
        setTimeout(() => {
          navbar.classList.add('sleep');
          setTimeout(() => navbar.classList.add('scrolled-bottom'), 100);
        }, 50);
      }
    }),
  { threshold: 1 }
);

hiddenSections.forEach((hiddenSection) =>
  hiddenSectionsObserver.observe(hiddenSection)
);

homeIntersectPointObserver.observe(homeIntersectPoint);

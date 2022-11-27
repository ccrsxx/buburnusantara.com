import { navbar, navLinks, mainTitle, hiddenSections } from '../lib/elements';

let currentActiveLink: number;

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
        if (navElement && sectionIndex !== null) {
          currentActiveLink = sectionIndex;

          if (sectionIndex >= 1) navbar.classList.add('scrolled-bottom');
          else navbar.classList.remove('scrolled-bottom');

          navElement.classList.add('active');
        }

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
  { threshold: 0.5 }
);

// TODO: Show navbar when sleep state is removed from navbar

const mainTitleObserver = new IntersectionObserver(
  (entries) =>
    entries.forEach(({ isIntersecting }) => {
      if (!isIntersecting) {
        navbar.classList.add('scrolled-middle');
        setTimeout(() => navbar.classList.add('sleep'), 500);
      } else if (currentActiveLink === 0) {
        navbar.classList.remove('sleep');
        navbar.classList.remove('scrolled-middle');
      }
    }),
  { threshold: 1 }
);

hiddenSections.forEach((hiddenSection) =>
  hiddenSectionsObserver.observe(hiddenSection)
);

mainTitleObserver.observe(mainTitle);

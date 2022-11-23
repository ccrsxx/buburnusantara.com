import { navbar, navLinks, mainTitle, hiddenSections } from './elements';

let currentActiveLink: number;

const hiddenSectionsObserver = new IntersectionObserver(
  ([entry]) => {
    const sectionElement = entry.target as HTMLElement;
    const sectionIndex = +(sectionElement.dataset.index as string);

    const navElement = navLinks[sectionIndex];

    const animatedElements: NodeListOf<HTMLElement> =
      sectionElement.querySelectorAll('.animated-element');

    if (entry.isIntersecting) {
      currentActiveLink = sectionIndex;

      if (sectionIndex >= 1) navbar.classList.add('navbar-scrolled-bottom');
      else navbar.classList.remove('navbar-scrolled-bottom');

      navElement.classList.add('nav-link-active');
      sectionElement.classList.add('section-show');

      for (const animatedElement of animatedElements) {
        animatedElement.style.animation = 'none';
        // eslint-disable-next-line no-unused-expressions
        animatedElement.offsetHeight;
        animatedElement.style.animation = '';
      }
    } else {
      navElement.classList.remove('nav-link-active');
      sectionElement.classList.remove('section-show');
    }
  },
  { threshold: 0.5 }
);

const mainTitleObserver = new IntersectionObserver(
  ([{ isIntersecting }]) => {
    if (!isIntersecting) {
      navbar.classList.add('navbar-scrolled-middle');
      setTimeout(() => navbar.classList.add('navbar-sleep'), 500);
    } else if (currentActiveLink === 0) {
      navbar.classList.remove('navbar-sleep');
      navbar.classList.remove('navbar-scrolled-middle');
    }
  },
  { threshold: 1 }
);

mainTitleObserver.observe(mainTitle);
hiddenSections.forEach((section) => hiddenSectionsObserver.observe(section));

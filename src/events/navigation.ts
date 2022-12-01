import { hamburgerButton, navLinksContainer, navLinks } from '@lib/elements';

let isNavOpen = false;

navLinks.forEach((navLink) =>
  navLink.addEventListener('click', handleToggleNav)
);

hamburgerButton.addEventListener('click', handleToggleNav);

function handleToggleNav(): void {
  if (isNavOpen) {
    navLinksContainer.classList.remove('active');
    hamburgerButton.classList.remove('active');
    isNavOpen = false;
  } else {
    navLinksContainer.classList.add('active');
    hamburgerButton.classList.add('active');
    isNavOpen = true;
  }
}

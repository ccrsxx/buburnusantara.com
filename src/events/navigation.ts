import { hamburgerButton, navLinksContainer } from '@lib/elements';

let isNavOpen = false;

hamburgerButton.addEventListener('click', handleNavOpen);

function handleNavOpen(): void {
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

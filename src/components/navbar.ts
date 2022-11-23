import { body } from './ui/body';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Offer', href: '#offer' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' }
] as const;

body.innerHTML += /* html */ `
  <header class="navbar">
    <a class="text-xl tracking-widest" href="#">BUBUR</a>
    <nav id='nav-link-container' class="flex gap-8">
      ${navLinks.reduce(
        (acc, { name, href }) =>
          acc +
          `
            <a class="nav-link" href="${href}">${name}</a>
          `,
        ''
      )}
    </nav>
  </header>
`;

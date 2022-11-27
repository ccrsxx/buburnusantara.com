import { html } from '@lib/utils';

type ValidSection = 'home' | 'about' | 'offer' | 'menu' | 'gallery' | 'contact';

type NavLink = {
  name: Capitalize<ValidSection>;
  href: string;
};

const navLinks: Readonly<NavLink[]> = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Offer', href: '#offer' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' }
];

export function Navbar(): string {
  return html`
    <header id="navbar">
      <div class="flex w-full max-w-6xl items-center justify-between">
        <a
          class="smooth-tab text-xl uppercase tracking-widest text-white"
          href="#"
          >Bubur</a
        >
        <nav id="nav-link-container" class="flex gap-8">
          ${navLinks.reduce(
            (acc, { name, href }) =>
              acc +
              html`<a class="smooth-tab nav-link" href="${href}">${name}</a>`,
            ''
          )}
        </nav>
      </div>
    </header>
  `;
}

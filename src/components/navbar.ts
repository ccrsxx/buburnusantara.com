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
      <div
        class="main-container flex flex-col justify-center lg:flex-row lg:justify-between lg:gap-4"
      >
        <div class="flex justify-between">
          <a
            class="smooth-tab self-start text-xl uppercase tracking-widest text-black lg:self-auto lg:text-white"
            href="#"
            >Bubur
          </a>
          <button id="hamburger-button">
            <i class="container">
              <span class="top"></span>
              <span class="middle"></span>
              <span class="bottom"></span>
            </i>
          </button>
        </div>
        <nav id="nav-links-container">
          ${navLinks.reduce(
            (acc, { name, href }) =>
              acc +
              html`
                <a class="nav-link smooth-tab" href="${href}"> ${name} </a>
              `,
            ''
          )}
        </nav>
      </div>
    </header>
  `;
}

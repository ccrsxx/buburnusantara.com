import { html } from '@lib/utils';

type ValidSection =
  | 'home'
  | 'about'
  | 'favorite'
  | 'menu'
  | 'gallery'
  | 'contact';

type NavLink = {
  name: Capitalize<ValidSection>;
  href: string;
};

const navLinks: Readonly<NavLink[]> = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Favorite', href: '#favorite' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' }
];

export function Navbar(): string {
  return html`
    <header id="navbar">
      <div
        id="navbar-container"
        class="main-container flex flex-col justify-center lg:flex-row lg:justify-between lg:gap-4"
      >
        <div class="flex items-center justify-between">
          <a
            class="smooth-tab rounded-md text-xl uppercase tracking-widest text-black lg:text-white"
            href="#"
            >Bubur Nusantara
          </a>
          <button id="hamburger-button" class="smooth-tab rounded-md p-1">
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
                <a class="nav-link smooth-tab rounded-md" href="${href}">
                  ${name}
                </a>
              `,
            ''
          )}
        </nav>
      </div>
    </header>
  `;
}

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

export const navLinks: Readonly<NavLink[]> = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Favorite', href: '#offer' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' }
];

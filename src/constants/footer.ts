type Link = { name: string; href: string };

const linksPlaceholder: Readonly<Link[]> = [
  { name: 'About Us', href: '#' },
  { name: 'Our Chef', href: '#' },
  { name: 'Events', href: '#' },
  { name: 'Testimonials', href: '#' }
];

type FooterLink = {
  title: string;
  links: Readonly<Link[]>;
};

const footerLinks: Readonly<FooterLink[]> = [
  {
    title: 'Company',
    links: linksPlaceholder
  },
  {
    title: 'Legal',
    links: linksPlaceholder
  }
];

type ValidDay =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

type OpenHour = {
  day: Capitalize<ValidDay>;
  open: string;
};

const openHours: Readonly<OpenHour[]> = [
  { day: 'Monday', open: '07:00 - 20:00' },
  { day: 'Tuesday', open: '07:00 - 20:00' },
  { day: 'Wednesday', open: '07:00 - 20:00' },
  { day: 'Thursday', open: 'Closed' },
  { day: 'Friday', open: '07:00 - 20:00' },
  { day: 'Saturday', open: '07:00 - 20:00' },
  { day: 'Sunday', open: '07:00 - 20:00' }
];

export { footerLinks, openHours };

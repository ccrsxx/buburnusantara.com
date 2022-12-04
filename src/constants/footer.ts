type Link = { name: string; href: string };

type FooterLink = {
  title: string;
  links: Link[];
};

const footerLinks: Readonly<FooterLink[]> = [
  {
    title: 'Restaurant',
    links: [
      { name: 'Testimonials', href: '#' },
      { name: 'Commerce', href: '#' },
      { name: 'Our Chefs', href: '#' },
      { name: 'Events', href: '#' }
    ]
  },
  {
    title: 'More',
    links: [
      { name: 'Breakfast', href: '#' },
      { name: 'Lunch', href: '#' },
      { name: 'Dinner', href: '#' }
    ]
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

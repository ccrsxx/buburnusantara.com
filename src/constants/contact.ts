import type { IconName } from '@components/ui/custom-icon';

type ContactInfo = {
  href: string;
  style: string;
  title: string;
  iconName: IconName;
};

export const contactInfos: Readonly<ContactInfo[]> = [
  {
    href: 'https://goo.gl/maps/PxD3wGwbXDKQP5ML9',
    style: 'hover:bg-red-400 focus-visible:bg-red-400',
    title: 'Location',
    iconName: 'MapPinIcon'
  },
  {
    href: 'mailto:site@buburnusantara.com',
    style: 'hover:bg-blue-400 focus-visible:bg-blue-400',
    title: 'Email',
    iconName: 'AtIcon'
  },
  {
    href: 'tel:+6285692807048',
    style: 'hover:bg-green-400 focus-visible:bg-green-400',
    title: 'Phone',
    iconName: 'PhoneIcon'
  },
  {
    href: 'https://www.instagram.com/buburnusantara.id',
    style: 'hover:bg-rose-400 focus-visible:bg-rose-400',
    title: 'Instagram',
    iconName: 'InstagramIcon'
  },
  {
    href: 'https://wa.me/6285692807048',
    style: 'hover:bg-green-400 focus-visible:bg-green-400',
    title: 'WhatsApp',
    iconName: 'WhatsAppIcon'
  }
];

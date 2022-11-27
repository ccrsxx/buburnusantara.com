import { html } from '@lib/utils';

const linksPlaceholder = [
  { name: 'About Us', href: '#' },
  { name: 'Our Chef', href: '#' },
  { name: 'Events', href: '#' },
  { name: 'Testimonials', href: '#' }
] as const;

type Link = { name: string; href: string };

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

export function Footer(): string {
  return html`
    <footer class="hidden-section grid justify-items-center gap-24 bg-[#333]">
      <div class="flex w-full max-w-6xl items-start justify-center gap-24">
        <section class="animated-element fade-bottom grid max-w-xs gap-3">
          <h2 class="font-poppins font-medium text-white/60">About us</h2>
          <p class="text-white/30">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            aliquid unde rem odio dolor quae illum reiciendis quia similique
            voluptates in, eos optio voluptatem. Dolorum quis eaque delectus
            nostrum nemo.
          </p>
        </section>
        <section class="animated-element fade-bottom grid gap-3 delay-100">
          <h2 class="font-poppins font-medium text-white/60">Open hours</h2>
          <ul>
            ${openHours.reduce(
              (acc, { day, open }) =>
                acc +
                html`
                  <li class="grid grid-cols-2 gap-3 text-white/30">
                    <span>${day}</span>
                    <span class="text-center font-poppins">${open}</span>
                  </li>
                `,
              ''
            )}
          </ul>
        </section>
        ${footerLinks.reduce((acc, { title, links }, index) => {
          const delay = `delay-${(index + 2) * 100}`;

          return (
            acc +
            html`
              <section class="${delay} animated-element fade-bottom grid gap-3">
                <h2 class="font-poppins font-medium text-white/60">${title}</h2>
                <nav class="grid gap-2">
                  ${links.reduce(
                    (acc, { name, href }) =>
                      acc +
                      html`
                        <a
                          class="hover:transition-200 text-white/30 transition hover:text-[#FDA403]"
                          href="${href}"
                        >
                          ${name}
                        </a>
                      `,
                    ''
                  )}
                </nav>
              </section>
            `
          );
        }, '')}
      </div>
      <p
        class="animated-element fade-bottom text-center font-poppins delay-[400ms]"
      >
        Copyright &copy; 2022 Bubur Nusantara. All rights reserved.
      </p>
    </footer>
  `;
}

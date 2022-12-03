import { html } from '@lib/utils';

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

export function Footer(): string {
  return html`
    <footer class="hidden-section grid justify-items-center gap-24 bg-[#333]">
      <div
        class="main-container grid grid-cols-2 flex-wrap items-start justify-center gap-12 sm:flex sm:gap-24"
      >
        <section
          class="animated-element fade-bottom col-span-2 grid gap-3 sm:max-w-xs"
        >
          <h2 class="font-poppins font-medium text-white/60">About us</h2>
          <p class="leading-normal text-white/30">
            "Saya bukan juru masak yang hebat, saya bukan seniman hebat, tapi
            saya suka seni, dan saya suka makanan. Jadi, saya adalah penjelajah
            yang sempurna." - Michael Palin
          </p>
        </section>
        <section
          class="animated-element fade-bottom fade-delay-100 col-span-2 grid gap-3"
        >
          <h2 class="font-poppins font-medium text-white/60">Open hours</h2>
          <ul class="grid justify-start gap-1">
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
        ${footerLinks.reduce(
          (acc, { title, links }, index) =>
            acc +
            html`
              <section
                class="fade-delay-${(index + 2) * 100} 
                       animated-element fade-bottom grid gap-3"
              >
                <h2 class="font-poppins font-medium text-white/60">${title}</h2>
                <nav class="grid gap-1">
                  ${links.reduce(
                    (acc, { name, href }) =>
                      acc +
                      html`
                        <a
                          class="smooth-tab justify-self-start rounded-md text-white/30 transition
                                 duration-200 hover:text-accent-orange hover:transition 
                                 focus-visible:text-accent-orange"
                          href="${href}"
                        >
                          ${name}
                        </a>
                      `,
                    ''
                  )}
                </nav>
              </section>
            `,
          ''
        )}
      </div>
      <p
        class="animated-element fade-bottom fade-delay-400 text-center font-poppins"
      >
        Copyright &copy; 2022 Bubur Nusantara. All rights reserved.
      </p>
    </footer>
  `;
}

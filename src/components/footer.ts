import { html } from '@lib/utils';

const linksPlaceholder = [
  { name: 'About Us', href: '#' },
  { name: 'Our Chef', href: '#' },
  { name: 'Events', href: '#' },
  { name: 'Testimonials', href: '#' }
] as const;

type FooterLink = {
  title: string;
  links: Readonly<{ name: string; href: string }[]>;
};

const footerLinks: Readonly<FooterLink[]> = [
  {
    title: 'About',
    links: linksPlaceholder
  },
  {
    title: 'More',
    links: linksPlaceholder
  },
  {
    title: 'Company',
    links: linksPlaceholder
  },
  {
    title: 'Legal',
    links: linksPlaceholder
  }
];

export function Footer(): string {
  return html`
    <footer class="hidden-section grid justify-items-center gap-24 bg-[#333]">
      <div class="flex w-full max-w-6xl justify-center gap-24">
        ${footerLinks.reduce((acc, { title, links }, index) => {
          const delay = `delay-${index * 100}`;

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
        Copyright &copy; 2022 ccrsxx. All rights reserved.
      </p>
    </footer>
  `;
}

import { html } from '@lib/utils';
import { CustomIcon } from './ui/custom-icon';
import { InputField } from './common/input-field';
import type { IconName } from './ui/custom-icon';
import type { InputFieldProps } from './common/input-field';

type ContactInfo = {
  href: string;
  style: string;
  title: string;
  iconName: IconName;
};

const contactInfos: Readonly<ContactInfo[]> = [
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

const contactInputFields: Readonly<InputFieldProps[]> = [
  {
    id: 'name',
    label: 'Name'
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email'
  },
  {
    id: 'message',
    label: 'Message',
    useTextArea: true
  }
];

export function Contact(): string {
  return html`
    <section
      id="contact"
      class="hidden-section grid justify-items-center gap-12"
      data-index="5"
    >
      <div class="animated-element fade-bottom grid gap-4 text-center">
        <h2 class="section-title">Get in Touch</h2>
        <p class="section-subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          aliquid unde rem odio dolor quae illum reiciendis quia similique
          voluptates in, eos optio voluptatem. Dolorum quis eaque delectus
          nostrum nemo.
        </p>
      </div>
      <div
        class="main-container flex flex-col items-center justify-between gap-8 md:flex-row md:items-stretch"
      >
        <form
          id="contact-form"
          class="animated-element fade-left fade-delay-100 grid w-full max-w-2xl items-center gap-4"
        >
          ${contactInputFields.reduce(
            (acc, contactInputField) => acc + InputField(contactInputField),
            ''
          )}
          <button
            id="contact-submit-button"
            class="smooth-tab group ml-auto flex w-full max-w-[175px] items-center gap-2 rounded-md bg-accent-orange px-4 py-3
                   text-white shadow transition duration-200 enabled:hover:-translate-y-1 enabled:hover:shadow-xl 
                   enabled:hover:brightness-110 enabled:focus-visible:-translate-y-1 enabled:focus-visible:shadow-xl 
                   enabled:focus-visible:brightness-110 disabled:cursor-wait disabled:brightness-90"
          >
            Send Message
            ${CustomIcon({
              style: `h-6 w-6 transition-transform duration-200 group-hover:-translate-y-1 
                      group-hover:translate-x-0.5 group-hover:-rotate-[30deg] group-focus-visible:-translate-y-1 
                      group-focus-visible:translate-x-0.5 group-focus-visible:-rotate-[30deg]`,
              iconName: 'PaperAirplaneIcon'
            })}
          </button>
        </form>
        <div
          class="animated-element fade-right fade-delay-100 grid w-full max-w-sm auto-rows-min gap-6"
        >
          <iframe
            class="h-60 w-full rounded-md bg-main-background"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.989671962544!2d106.71504691475391!3d-6.132089195560011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1d4011a5293f%3A0x3af5a7556c06e77!2sBubur%20Ayam%20Kampung%20Nusantara!5e0!3m2!1sen!2sid!4v1669432828948!5m2!1sen!2sid&iwloc=near"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            tabindex="-1"
          ></iframe>
          <div class="flex flex-wrap justify-center gap-4">
            ${contactInfos.reduce(
              (acc, { href, style, title, iconName }) =>
                acc +
                html`
                  <a
                    href="${href}"
                    class="${style} smooth-tab flex gap-2 rounded-md bg-main-background p-2 text-black/75 shadow
                           transition duration-300 hover:-translate-y-2 hover:text-white hover:shadow-xl
                           focus-visible:-translate-y-2 focus-visible:text-white focus-visible:shadow-xl"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i>${CustomIcon({ iconName })}</i>
                    ${title}
                  </a>
                `,
              ''
            )}=
          </div>
        </div>
      </div>
    </section>
  `;
}

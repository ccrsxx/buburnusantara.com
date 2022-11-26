import { html } from '@lib/utils';
import { CustomIcon } from './ui/custom-icon';
import { InputField } from './common/input-field';
import type { IconName } from './ui/custom-icon';

type ContactInfo = {
  href: string;
  style: string;
  content: string;
  iconName: IconName;
};

const contactInfos: Readonly<ContactInfo[]> = [
  {
    href: 'https://goo.gl/maps/PxD3wGwbXDKQP5ML9',
    style: 'hover:bg-red-400',
    content: 'Location',
    iconName: 'MapPinIcon'
  },
  {
    href: 'tel:+6281234567890',
    style: 'hover:bg-green-400',
    content: 'Phone',
    iconName: 'PhoneIcon'
  },
  {
    href: 'https://wa.me/6281234567890',
    style: 'hover:bg-green-400',
    content: 'WhatsApp',
    iconName: 'WhatsAppIcon'
  },
  {
    href: 'https://www.instagram.com/buburnusantara',
    style: 'hover:bg-rose-400',
    content: 'Instagram',
    iconName: 'InstagramIcon'
  },
  {
    href: 'mailto:site@buburnusantara.com',
    style: 'hover:bg-blue-400',
    content: 'Email',
    iconName: 'AtIcon'
  }
];

export function Contact(): string {
  return html`
    <section
      id="contact"
      class="hidden-section grid justify-items-center gap-12"
      data-index="5"
    >
      <div
        class="animated-element fade-bottom grid gap-4 text-center 
               [&>p]:text-lg [&>p]:text-[#b8b8b8]"
      >
        <h2 class="font-poppins text-6xl font-bold text-black">Get in Touch</h2>
        <p class="max-w-2xl justify-self-center text-xl font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          aliquid unde rem odio dolor quae illum reiciendis quia similique
          voluptates in, eos optio voluptatem. Dolorum quis eaque delectus
          nostrum nemo.
        </p>
      </div>
      <div class="flex w-full max-w-6xl justify-between">
        <form
          id="contact-form"
          class="animated-element fade-left grid w-full max-w-2xl items-center gap-4 delay-100"
        >
          ${InputField({ id: 'name', label: 'Name' })}
          ${InputField({ id: 'email', label: 'Email', type: 'email' })}
          ${InputField({ id: 'message', label: 'Message', useTextArea: true })}
          <button
            id="contact-submit-button"
            class="group ml-auto flex w-full max-w-[175px] items-center gap-2 rounded-md bg-[#FDA403] px-4 py-3 text-white
                   shadow transition duration-200 enabled:hover:-translate-y-1 enabled:hover:shadow-xl 
                   enabled:hover:brightness-110 disabled:cursor-wait disabled:brightness-90"
          >
            Send Message
            ${CustomIcon({
              style: `h-6 w-6 transition-transform duration-200 group-hover:-translate-y-1 
                      group-hover:translate-x-0.5 group-hover:-rotate-[30deg]`,
              iconName: 'PaperAirplaneIcon'
            })}
          </button>
        </form>
        <div
          class="animated-element fade-right grid w-full max-w-sm auto-rows-min gap-8 delay-100"
        >
          <div>
            <iframe
              class="h-60 w-full rounded-md bg-gray-400"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.989671962544!2d106.71504691475391!3d-6.132089195560011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1d4011a5293f%3A0x3af5a7556c06e77!2sBubur%20Ayam%20Kampung%20Nusantara!5e0!3m2!1sen!2sid!4v1669432828948!5m2!1sen!2sid&iwloc=near"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="flex flex-wrap justify-center gap-4 text-black/75">
            ${contactInfos.reduce(
              (acc, { href, style, content, iconName }) =>
                acc +
                html`
                  <a
                    href="${href}"
                    class="${style} flex gap-2 rounded-md bg-[#f8f9fa] p-4 px-4 py-3 shadow transition 
                           duration-300 hover:-translate-y-2 hover:text-white hover:shadow-xl"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i>${CustomIcon({ iconName })}</i>
                    ${content}
                  </a>
                `,
              ''
            )}
          </div>
        </div>
      </div>
    </section>
  `;
}

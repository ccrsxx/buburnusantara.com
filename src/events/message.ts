import { sendEmail } from '@lib/mail';
import { contactForm, contactSubmitButton } from '@lib/elements';
import { toastFire } from '@lib/toast';
import { CustomIcon } from '@components/ui/custom-icon';
import { Loading } from '@components/ui/loading';
import type { Message } from '@lib/types/message';

contactForm.addEventListener('submit', handleContactSubmit);

async function handleContactSubmit(e: SubmitEvent): Promise<void> {
  e.preventDefault();

  contactSubmitButton.disabled = true;
  contactSubmitButton.innerHTML = Loading();

  const formData = new FormData(contactForm);
  const contact = Object.fromEntries(formData) as Message;

  await sendEmail(contact);

  contactForm.reset();

  contactSubmitButton.disabled = false;
  contactSubmitButton.innerHTML = `Send Message
    ${CustomIcon({
      style: `h-6 w-6 transition-transform duration-200 group-hover:-translate-y-1 
              group-hover:translate-x-0.5 group-hover:-rotate-[30deg]`,
      iconName: 'PaperAirplaneIcon'
    })}`;

  await toastFire({
    title: 'Your Message was sent!',
    description: 'Thank you for contacting us.'
  });
}

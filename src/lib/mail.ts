import {
  userId,
  serviceId,
  messageTemplateId,
  reservationTemplateId
} from './env';
import type { Reservation } from './types/reservation';
import type { Message } from './types/message';
import type { Email } from './types/email';

export async function sendEmail(data: Reservation | Message): Promise<void> {
  const email: Email = {
    user_id: userId,
    service_id: serviceId,
    template_id: 'name' in data ? messageTemplateId : reservationTemplateId,
    template_params: data
  };

  await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(email)
  });
}

import { userId, serviceId, templateId } from './env';
import type { Reservation } from './types/reservation';
import type { Body } from './types/body';

export async function sendEmail(reservation: Reservation): Promise<void> {
  const data: Body = {
    user_id: userId,
    service_id: serviceId,
    template_id: templateId,
    template_params: reservation
  };

  await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(data)
  });
}

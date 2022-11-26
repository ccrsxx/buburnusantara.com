const userId = import.meta.env.VITE_USER_ID as string;
const serviceId = import.meta.env.VITE_SERVICE_ID as string;
const messageTemplateId = import.meta.env.VITE_MESSAGE_TEMPLATE_ID as string;
const reservationTemplateId = import.meta.env
  .VITE_RESERVATION_TEMPLATE_ID as string;

export { userId, serviceId, messageTemplateId, reservationTemplateId };

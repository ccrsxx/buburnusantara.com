import type { Reservation } from './reservation';
import type { Message } from './message';

export type Email = {
  service_id: string;
  template_id: string;
  user_id: string;
  template_params: Reservation | Message;
};

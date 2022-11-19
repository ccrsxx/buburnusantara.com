import type { Reservation } from './reservation';

export type Body = {
  service_id: string;
  template_id: string;
  user_id: string;
  template_params: Reservation;
};

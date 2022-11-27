import { html } from '@lib/utils';
import { CustomIcon } from '@components/ui/custom-icon';
import { InputReserve } from '@components/common/input-reserve';
import type { InputReserveProps } from '@components/common/input-reserve';

const reservationInputFields: Readonly<InputReserveProps[]> = [
  {
    id: 'firstName',
    label: 'First Name'
  },
  {
    id: 'lastName',
    label: 'Last Name'
  },
  {
    id: 'email',
    type: 'email',
    label: 'Email',
    style: 'col-span-2'
  },
  {
    id: 'people',
    label: 'How Many People',
    useSelect: true
  },
  {
    id: 'phone',
    type: 'tel',
    label: 'Phone'
  },
  {
    id: 'date',
    type: 'date',
    label: 'Date'
  },
  {
    id: 'time',
    type: 'time',
    label: 'Time'
  },
  {
    id: 'message',
    label: 'Message',
    style: 'col-span-2',
    useTextArea: true
  }
];

export function ReservationModal(): string {
  return html`
    <div>
      <div id="reservation-modal-backdrop" class="modal-backdrop"></div>
      <dialog id="reservation-modal">
        <div class="grid w-screen max-w-3xl gap-4 rounded-md bg-white p-4">
          <button
            id="reservation-close-button"
            class="ml-auto flex gap-1 text-black/50 transition-colors duration-200 hover:text-black"
          >
            CLOSE ${CustomIcon({ iconName: 'XMarkIcon' })}
          </button>
          <form
            id="reservation-form"
            class="grid grid-cols-2 gap-4 font-poppins"
          >
            ${reservationInputFields.reduce(
              (acc, inputData) => acc + InputReserve(inputData),
              ''
            )}
            <button
              id="reservation-submit-button"
              class="smooth-tab col-span-2 rounded-md bg-yellow-400 p-2 text-white transition duration-200 
                     hover:brightness-90 disabled:cursor-wait disabled:brightness-90"
            >
              Reserve Now
            </button>
          </form>
        </div>
      </dialog>
    </div>
  `;
}

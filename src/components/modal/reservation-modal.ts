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
    style: 'sm:col-span-2'
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
    label: 'Date',
    style: '[&>input]:w-full'
  },
  {
    id: 'time',
    type: 'time',
    label: 'Time',
    style: '[&>input]:w-full'
  },
  {
    id: 'message',
    label: 'Message',
    style: 'sm:col-span-2',
    useTextArea: true
  }
];

export function ReservationModal(): string {
  return html`
    <div>
      <div id="reservation-modal-backdrop" class="modal-backdrop"></div>
      <dialog id="reservation-modal" class="pb-8 sm:pb-0">
        <div class="w-[90vw] max-w-3xl flex-col gap-4 rounded-md bg-white p-4">
          <button
            id="reservation-modal-close-button"
            class="smooth-tab ml-auto flex gap-1 rounded-md text-black/50 
                   transition-colors duration-200 hover:text-black focus-visible:text-black"
          >
            CLOSE ${CustomIcon({ iconName: 'XMarkIcon' })}
          </button>
          <form
            id="reservation-modal-form"
            class="grid gap-4 font-poppins sm:grid-cols-2"
          >
            ${reservationInputFields.reduce(
              (acc, inputData) => acc + InputReserve(inputData),
              ''
            )}
            <button
              id="reservation-modal-submit-button"
              class="smooth-tab rounded-md bg-yellow-400 p-2 text-white transition duration-200 hover:brightness-90 
                     disabled:cursor-wait disabled:brightness-90 sm:col-span-2"
            >
              Reserve Now
            </button>
          </form>
        </div>
      </dialog>
    </div>
  `;
}

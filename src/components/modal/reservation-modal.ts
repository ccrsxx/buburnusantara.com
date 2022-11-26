import { html } from '@lib/utils';
import { CustomIcon } from '@components/ui/custom-icon';
import { InputReserve } from '@components/common/input-reserve';
import type { InputFieldProps } from '@components/common/input-field';

const reservationInputFields: Readonly<InputFieldProps[]> = [
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
            <div class="row-start-3 grid gap-1">
              <label class="self-start" for="people">How Many People</label>
              <select
                class="smooth-tab h-full rounded-md bg-white p-2 ring-2 ring-slate-200 focus-visible:ring-blue-400"
                name="people"
                id="people"
                required
              >
                <option value="" selected disabled hidden>
                  Choose many people
                </option>
                <option value="1">1 People</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4+ People</option>
              </select>
            </div>
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

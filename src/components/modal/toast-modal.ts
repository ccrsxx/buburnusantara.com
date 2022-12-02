import { html } from '@lib/utils';

export function ToastModal(): string {
  return html`
    <div>
      <div id="toast-modal-backdrop" class="modal-backdrop"></div>
      <dialog id="toast-modal">
        <div class="grid justify-items-center gap-4 rounded bg-white p-8">
          <i id="checkmark-icon" style="display: none;">
            <svg
              class="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                class="checkmark-circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                class="checkmark-check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </i>
          <div class="grid gap-2 text-center">
            <h2
              id="toast-modal-title"
              class="font-poppins text-2xl font-bold"
            ></h2>
            <p id="toast-modal-description"></p>
          </div>
          <form method="dialog">
            <button
              class="smooth-tab rounded-md bg-green-400 px-3 py-2 text-white"
            >
              Okay
            </button>
          </form>
        </div>
      </dialog>
    </div>
  `;
}

import { main } from './main';

main.innerHTML += /* html */ `
  <section id="home" class="py-0">
    <div
      class="section-hide main-title grid min-h-screen place-content-center justify-items-center gap-12 pt-10 text-center"
      data-index="0"
    >
      <h1
        class="animated-element animate-[fadeFromBottom_500ms_forwards] font-poppins text-7xl font-bold"
      >
        Welcome to Bubur
      </h1>
      <h2
        class="animated-element animate-[fadeFromBottom_600ms_forwards] text-xl font-light text-white/70"
      >
        Come and eat well with our delicious & healthy foods.
      </h2>
      <dialog
        class="grid w-full max-w-3xl gap-6 overflow-auto rounded-md p-4"
        id="reservation-dialog"
      >
        <button
          id="reservation-close-button"
          class="ml-auto flex gap-1 text-black/50 transition-colors duration-200 hover:text-black"
        >
          CLOSE
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <form id="reservation-form" class="grid grid-cols-2 gap-4 font-poppins">
          <div class="flex flex-col gap-1">
            <label class="self-start" for="firstName">First Name</label>
            <input
              required
              type="text"
              name="firstName"
              id="firstName"
              class="smooth-tab rounded-md border-2 border-black/10 p-2"
            />
          </div>
          <div class="flex flex-col gap-1">
            <label class="self-start" for="lastName">Last Name</label>
            <input
              required
              type="text"
              name="lastName"
              id="lastName"
              class="smooth-tab rounded-md border-2 border-black/10 p-2"
            />
          </div>
          <div class="col-span-2 flex flex-col gap-1">
            <label class="self-start" for="email">Email</label>
            <input
              required
              type="email"
              name="email"
              id="email"
              class="smooth-tab rounded-md border-2 border-black/10 p-2"
            />
          </div>
          <div class="flex flex-col gap-1">
            <label class="self-start" for="people">How Many People</label>
            <select
              class="smooth-tab h-full rounded-md border-2 border-black/10 bg-white p-2"
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
          <div class="flex flex-col gap-1">
            <label class="self-start" for="phone">Phone</label>
            <input
              required
              type="tel"
              name="phone"
              id="phone"
              class="smooth-tab rounded-md border-2 border-black/10 p-2"
            />
          </div>
          <div class="flex flex-col gap-1">
            <label class="self-start" for="date">Date</label>
            <input
              required
              type="date"
              name="date"
              id="date"
              class="smooth-tab rounded-md border-2 border-black/10 p-2"
            />
          </div>
          <div class="flex flex-col gap-1">
            <label class="self-start" for="time">Time</label>
            <input
              required
              type="time"
              name="time"
              id="time"
              class="smooth-tab rounded-md border-2 border-black/10 p-2"
            />
          </div>
          <div class="col-span-2 flex flex-col gap-1">
            <label class="self-start" for="message">Message</label>
            <textarea
              required
              name="message"
              id="message"
              rows="7"
              class="smooth-tab rounded-md border-2 border-black/10 p-2"
            ></textarea>
          </div>
          <button
            id="reservation-submit-button"
            class="smooth-tab col-span-2 rounded-md bg-yellow-400 p-2 text-white transition duration-200 
                  hover:brightness-90 disabled:cursor-not-allowed disabled:brightness-90"
          >
            Reserve Now
          </button>
        </form>
      </dialog>
      <button
        id="reservation-open-button"
        class="animated-element animate-[fadeFromBottom_700ms_forwards] border-2 border-white 
               px-8 py-4 font-poppins transition-colors hover:bg-white hover:text-black"
      >
        Reservation
      </button>
    </div>
  </section>
`;

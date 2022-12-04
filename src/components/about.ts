import { html } from '@lib/utils';

export function About(): string {
  return html`
    <section
      id="about"
      class="hidden-section grid place-items-center"
      data-index="1"
    >
      <div
        class="main-container flex flex-col items-center justify-between 
               gap-8 lg:flex-row lg:gap-4"
      >
        <div
          class="animated-element fade-left grid max-w-2xl gap-4 lg:max-w-md [&>p]:text-lg"
        >
          <h2 class="section-title mb-4 text-center lg:text-left">
            Tentang Kami
          </h2>
          <p>
            Selamat Datang di Bubur Ayam Kampung Nusantara, berdiri sejak 2018
            kami menghimpun lebih dari ribuan pelanggan dari berbagai daerah.
            Kami berkomitmen untuk tetap menyajikan rasa dan kualitas yang sama
            setiap harinya untuk mencapai kepuasan pelanggan.
          </p>
          <p>
            Menggunakan ayam kampung pilihan dan beras lokal pilihan kami
            menyajikan bubur yang tidak hanya mengenyangkan tetapi juga memiliki
            kualitas rasa yang tiada duanya. Untuk itu kami tunggu kehadirannya
            di Bubur Ayam Kampung Nusantara !
          </p>
        </div>
        <img
          class="animated-element fade-right viewable-image h-72 w-[448px]
                 rounded-md object-cover duration-500 xl:h-96 xl:w-[576px]"
          src="/assets/about-chef.webp"
          alt="Founder & Chef"
        />
      </div>
    </section>
  `;
}

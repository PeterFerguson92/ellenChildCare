import { Component } from "@angular/core";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [],
  template: `
    <section id="contact" class="py-10 lg:py-20">
      <div class="container">
        <div class="relative z-20">
          <div class="hidden xl:block">
            <div
              class="before:absolute before:-end-10 before:-top-10 before:-z-10 before:h-24 before:w-24 before:bg-[url('../images/other/dot.svg')]"
            ></div>
            <div
              class="after:absolute after:-bottom-10 after:-start-10 after:-z-10 after:h-24 after:w-24 after:bg-[url('../images/other/dot.svg')]"
            ></div>
          </div>

          <div class="grid gap-6 xl:grid-cols-2">
            <div class="group relative">
              <img
                src="assets/images/landing/charity/img-11.jpg"
                class="h-full w-full rounded-xl"
                alt=""
              />
              <div class="absolute inset-0 rounded-xl">
                <div class="flex h-full items-end justify-center">
                  <div
                    class="m-6 mx-auto max-w-md rounded-xl bg-white/10 p-4 text-center backdrop-blur-xl"
                  >
                    <h2 class="text-4xl/snug font-medium text-white">
                      Reach us anytime at
                      <a
                        href="tel:+447884967863"
                        class="underline hover:text-orange-300 transition"
                      >
                        07884967863
                      </a>
                    </h2>
                    <p class="mt-5 text-base text-white/80">
                      we’d be delighted to speak with you!
                    </p>
                  </div>
                </div>
                <!-- flex  End -->
              </div>
            </div>
            <!-- col End -->

            <div>
              <div class="rounded-md bg-default-100 p-8 dark:bg-default-50">
                <form
                  #contactForm
                  class="relative"
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  (submit)="onSubmit(contactForm)"
                >
                  <!-- Required Access Key -->
                  <input
                    type="hidden"
                    name="access_key"
                    value="19d7a6a0-14b4-44de-a231-ebf68b2e920f"
                  />

                  <!-- Optional anti-spam honeypot -->
                  <!-- <input type="checkbox" name="botcheck" class="hidden" style="display:none;" /> -->

                  <h2 class="text-2xl font-medium text-default-950 mb-4">
                    Join Us Today!
                  </h2>

                  <div class="my-6 space-y-6">
                    <div>
                      <input
                        name="name"
                        type="text"
                        class="block w-full rounded-full border-default-200 px-4 py-3 text-base text-default-950 focus:border-default-300 focus:ring-transparent dark:bg-default-50"
                        id="formFirstName"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div>
                      <input
                        name="email"
                        type="email"
                        class="block w-full rounded-full border-default-200 px-4 py-3 text-base text-default-950 focus:border-default-300 focus:ring-transparent dark:bg-default-50"
                        id="formEmail"
                        placeholder="Your Email"
                        required
                      />
                    </div>

                    <div>
                      <textarea
                        name="message"
                        class="block w-full rounded-2xl border-default-200 px-4 py-3 text-base text-default-950 focus:border-default-300 focus:ring-transparent dark:bg-default-50"
                        id="formSubject"
                        placeholder="Message"
                        rows="4"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    class="flex w-full items-center justify-center rounded-full bg-orange-600 py-3 text-base text-white transition-all hover:bg-orange-700"
                  >
                    Submit Now
                  </button>
                </form>
              </div>
            </div>
            <!-- col End -->
          </div>
          <!-- grid End -->
        </div>
      </div>
      <!-- Container End -->
    </section>
    <footer class="bg-orange-600 text-white py-10">
      <div
        class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10"
      >
        <!-- Business Description (Left Side) -->
        <div class="md:w-1/2">
          <h3 class="text-2xl font-semibold mb-3">Ellen’s Angel Childcare</h3>
          <p class="text-white/90 leading-relaxed">
            A warm, nurturing, and inspiring childcare center where every child
            is treated like an angel. We provide a safe space for learning,
            play, and growth. Helping little hearts and minds shine bright every
            day.
          </p>
        </div>

        <!-- Contact Info (Right Side) -->
        <div class="md:w-1/2 md:text-right">
          <h4 class="text-xl font-semibold mb-3">Contact Us</h4>
          <p class="text-white/90">
            118 Hatfield Mead<br />
            Morden, London, UK<br />
            SM4 5PG<br />
          </p>
          <p class="mt-2">
            <a
              href="tel:+447884967863"
              class="underline hover:text-orange-200 transition"
              >+44 7884 967863</a
            ><br />
          </p>
        </div>
      </div>

      <!-- Bottom Line -->
      <div
        class="mt-10 border-t border-white/20 pt-4 text-center text-white/80 text-sm"
      >
        2025 © <strong>Ellen’s Angel Childcare.</strong> Crafted and Coded with
        🤍 by
        <a
          href="https://twinmindsolutions.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
          class="underline hover:text-orange-200 transition"
        >
          TwinMindSolutions </a
        >.
      </div>
    </footer>
  `,
  styles: ``,
})
export class ContactComponent {
  onSubmit(formEl: HTMLFormElement) {
    // ✅ Clear the form fields right away
    formEl.reset();

    // Let Web3Forms continue with normal submission and redirect
    // No preventDefault() here — we want it to submit normally
  }
}

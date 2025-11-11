import { Component } from "@angular/core";
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: "app-faq",
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <!-- Start Faq -->
    <section id="faq" class="py-10 lg:py-20">
      <div class="container">
        <div class="mb-10 flex items-end justify-between">
          <div class="mx-auto max-w-2xl text-center">
            <span
              class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
              >Our FAQ</span
            >
            <h2 class="my-4 text-3xl font-medium capitalize text-default-950">
              Having Questions? We Have Answers!
            </h2>
          </div>
        </div>
        <!-- flex End-->

        <div
          class="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-12"
        >
          <div>
            <div class="hs-accordion-group space-y-4">
              <div
                class="hs-accordion active overflow-hidden rounded-lg border border-default-200 bg-white dark:bg-default-50"
                id="faq-1"
              >
                <button
                  class="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-default-950 transition-all"
                  aria-controls="faq-accordion-1"
                >
                  <h5 class="flex text-base font-medium">
                    What ages do you accept?
                  </h5>
                  <lucide-angular
                    name="chevron-up"
                    class="block size-4  transition-all duration-300 hs-accordion-active:hidden hs-accordion-active:-rotate-180"
                  ></lucide-angular>
                  <lucide-angular
                    name="chevron-down"
                    class="hidden size-4 transition-all duration-300 hs-accordion-active:block hs-accordion-active:-rotate-180"
                  ></lucide-angular>
                </button>
                <div
                  id="faq-accordion-1"
                  class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="faq-1"
                >
                  <div class="px-6 pb-4 pt-0">
                    <p class="text-sm text-default-600">
                      We welcome children from 6 weeks to 10 years old, offering
                      age-appropriate programs for infants, toddlers,
                      preschoolers, and after-school care for school-aged
                      children.
                    </p>
                  </div>
                </div>
              </div>
              <!-- col End-->

              <div
                class="hs-accordion overflow-hidden rounded-lg border border-default-200 bg-white dark:bg-default-50"
                id="faq-2"
              >
                <button
                  class="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-default-950 transition-all"
                  aria-controls="faq-2"
                >
                  <h5 class="flex text-base font-medium">
                    Are your caregivers qualified and trained?
                  </h5>
                  <lucide-angular
                    name="chevron-up"
                    class="block size-4  transition-all duration-300 hs-accordion-active:hidden hs-accordion-active:-rotate-180"
                  ></lucide-angular>
                  <lucide-angular
                    name="chevron-down"
                    class="hidden size-4 transition-all duration-300 hs-accordion-active:block hs-accordion-active:-rotate-180"
                  ></lucide-angular>
                </button>
                <div
                  id="faq-2"
                  class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="faq-2"
                >
                  <div class="px-6 pb-4 pt-0">
                    <p class="text-sm text-default-600">
                      Absolutely. Our educators are certified in early childhood
                      education, background-checked, and trained in CPR, First
                      Aid, and child safety. Ongoing professional development
                      ensures we provide the highest quality care.
                    </p>
                  </div>
                </div>
              </div>
              <!-- col End-->
              <div
                class="hs-accordion overflow-hidden rounded-lg border border-default-200 bg-white dark:bg-default-50"
                id="faq-2"
              >
                <button
                  class="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-default-950 transition-all"
                  aria-controls="faq-2"
                >
                  <h5 class="flex text-base font-medium">
                    Do you offer part-time or drop-in care?
                  </h5>
                  <lucide-angular
                    name="chevron-up"
                    class="block size-4  transition-all duration-300 hs-accordion-active:hidden hs-accordion-active:-rotate-180"
                  ></lucide-angular>
                  <lucide-angular
                    name="chevron-down"
                    class="hidden size-4 transition-all duration-300 hs-accordion-active:block hs-accordion-active:-rotate-180"
                  ></lucide-angular>
                </button>
                <div
                  id="faq-2"
                  class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="faq-2"
                >
                  <div class="px-6 pb-4 pt-0">
                    <p class="text-sm text-default-600">
                      Yes, we offer flexible part-time and occasional drop-in
                      options, depending on availability. This helps families
                      with shifting schedules get quality childcare when they
                      need it most
                    </p>
                  </div>
                </div>
              </div>
              <!-- col End-->
              <div
                class="hs-accordion overflow-hidden rounded-lg border border-default-200 bg-white dark:bg-default-50"
                id="faq-2"
              >
                <button
                  class="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-default-950 transition-all"
                  aria-controls="faq-2"
                >
                  <h5 class="flex text-base font-medium">
                    How do you keep parents updated on their child’s day?
                  </h5>
                  <lucide-angular
                    name="chevron-up"
                    class="block size-4  transition-all duration-300 hs-accordion-active:hidden hs-accordion-active:-rotate-180"
                  ></lucide-angular>
                  <lucide-angular
                    name="chevron-down"
                    class="hidden size-4 transition-all duration-300 hs-accordion-active:block hs-accordion-active:-rotate-180"
                  ></lucide-angular>
                </button>
                <div
                  id="faq-2"
                  class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="faq-2"
                >
                  <div class="px-6 pb-4 pt-0">
                    <p class="text-sm text-default-600">
                      We use a parent communication app to share photos,
                      updates, and daily reports. You’ll always know how your
                      child is doingm, from nap times to milestones.
                    </p>
                  </div>
                </div>
              </div>
              <!-- col End-->
              <div
                class="hs-accordion overflow-hidden rounded-lg border border-default-200 bg-white dark:bg-default-50"
                id="faq-2"
              >
                <button
                  class="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-default-950 transition-all"
                  aria-controls="faq-2"
                >
                  <h5 class="flex text-base font-medium">
                    What safety measures are in place?
                  </h5>
                  <lucide-angular
                    name="chevron-up"
                    class="block size-4  transition-all duration-300 hs-accordion-active:hidden hs-accordion-active:-rotate-180"
                  ></lucide-angular>
                  <lucide-angular
                    name="chevron-down"
                    class="hidden size-4 transition-all duration-300 hs-accordion-active:block hs-accordion-active:-rotate-180"
                  ></lucide-angular>
                </button>
                <div
                  id="faq-2"
                  class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="faq-2"
                >
                  <div class="px-6 pb-4 pt-0">
                    <p class="text-sm text-default-600">
                      Your child’s safety is our top priority. Our facility
                      features secure entry systems, indoor cameras, health
                      checks, and emergency preparedness protocols. Staff are
                      trained regularly in child protection and safety
                      procedures.
                    </p>
                  </div>
                </div>
              </div>
              <!-- col End-->
              <div
                class="hs-accordion overflow-hidden rounded-lg border border-default-200 bg-white dark:bg-default-50"
                id="faq-3"
              >
                <button
                  class="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-default-950 transition-all"
                  aria-controls="faq-3"
                >
                  <h5 class="flex text-base font-medium">
                    How do you handle illnesses or emergencies?
                  </h5>
                  <lucide-angular
                    name="chevron-up"
                    class="block size-4  transition-all duration-300 hs-accordion-active:hidden hs-accordion-active:-rotate-180"
                  ></lucide-angular>
                  <lucide-angular
                    name="chevron-down"
                    class="hidden size-4 transition-all duration-300 hs-accordion-active:block hs-accordion-active:-rotate-180"
                  ></lucide-angular>
                </button>
                <div
                  id="faq-3"
                  class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="faq-3"
                >
                  <div class="px-6 pb-4 pt-0">
                    <p class="text-sm text-default-600">
                      We follow strict health and hygiene policies. If a child
                      becomes unwell, we contact parents immediately and ensure
                      proper care until pickup. Emergency contacts and medical
                      information are always kept up to date.
                    </p>
                  </div>
                </div>
              </div>
              <!-- col End-->
            </div>
          </div>
          <!-- col End-->

          <div class="relative mb-20 lg:mb-0">
            <div class="relative">
              <img
                src="assets/images/landing/company/img-4.jpg"
                class="mx-auto rounded-lg"
                alt=""
              />
            </div>
            <!-- <div class="absolute inset-x-0 -bottom-14 hidden sm:block">
              <img
                src="assets/images/landing/company/img-3.jpg"
                class="h-full rounded-lg"
                alt=""
              />
            </div> -->
          </div>
          <!-- col End -->
        </div>
        <!-- grid End-->
      </div>
      <!-- container End-->
    </section>
    <!-- End faq -->
  `,
  styles: ``,
})
export class FaqComponent {}

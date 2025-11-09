import { Component } from "@angular/core";
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from "lucide-angular";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [LucideAngularModule],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],

  template: `
    <!-- About Start -->
    <section id="join" class="py-10 lg:py-20">
      <div class="container">
        <div class="grid grid-cols-1 items-center gap-6 xl:grid-cols-2">
          <div class="relative mb-20 lg:mb-0">
            <div class="relative">
              <img
                src="assets/images/landing/startup/img-3.jpg"
                class="mx-auto rounded-xl"
                alt=""
              />
            </div>
            <div class="absolute inset-x-0 -bottom-14 hidden sm:block">
              <img
                src="assets/images/landing/startup/img-10.jpg"
                class="h-full rounded-xl"
                alt=""
              />
            </div>
          </div>
          <!-- col End -->

          <div>
            <span
              class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
              >About Us</span
            >
            <h2 class="mt-6 text-4xl/tight font-medium text-default-950">
              Where Every Child Is Treated Like an Angel
            </h2>
            <p class="mt-5 text-base">
              With years of experience in early childhood education, our team
              understands that the early years lay the foundation for lifelong
              learning. That’s why we focus on creating meaningful experiences
              through play, creativity, and discovery. From the moment your
              little one steps through our doors, they’re welcomed into a space
              filled with warmth, laughter, and care.
            </p>
            <ul role="list" class="mt-6 space-y-2">
              <li class="flex items-center gap-2">
                <!-- svg icon -->
                <lucide-angular
                  name="minus"
                  class="inline-block size-7 text-primary"
                ></lucide-angular>
                <span class="text-base"
                  >Part-Time or Drop-In Care</span
                >
              </li>
              <li class="flex items-center gap-2">
                <!-- svg icon -->
                <lucide-angular
                  name="minus"
                  class="inline-block size-7 text-primary"
                ></lucide-angular>
                <span class="text-base"
                  >Language & Literacy Boost</span
                >
              </li>
              <li class="flex items-center gap-2">
                <!-- svg icon -->
                <lucide-angular
                  name="minus"
                  class="inline-block size-7 text-primary"
                ></lucide-angular>
                <span class="text-base"
                  >Preschool Readiness Program.</span
                >
              </li>
              <li class="flex items-center gap-2">
                <!-- svg icon -->
                <lucide-angular
                  name="minus"
                  class="inline-block size-7 text-primary"
                ></lucide-angular>
                <span class="text-base"
                  >Holiday Programs</span
                >
              </li>
            </ul>
            <!-- End list -->

          </div>
          <!-- col End -->
        </div>
        <!-- grid End -->
      </div>
      <!-- container End -->
    </section>
    <!-- About End -->
  `,
  styles: ``,
})
export class AboutComponent {}

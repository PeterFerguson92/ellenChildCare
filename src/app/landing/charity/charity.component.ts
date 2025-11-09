import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";
import { HeaderComponent } from "@components/header/header.component";
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from "lucide-angular";
import { FreeMode, Pagination, Thumbs } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import { HeroComponent } from "./hero.component";
import { ContactComponent } from "./contact.component";
import { AboutComponent } from "./about.component";
import { FaqComponent } from "./faq.component";

@Component({
  selector: "app-charity",
  standalone: true,
  imports: [
    HeaderComponent,
    AboutComponent,
    LucideAngularModule,
    HeroComponent,

    FaqComponent,

    ContactComponent,
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <app-header
      [customLinks]="charity"
      className="fixed"
      [sidebarNav]="false"
    />
    <!-- home page -->
    <app-hero />
    <!-- join sectionn -->
    <app-about />
    <!-- faq section -->
    <app-faq />
    <!-- contact section -->
    <app-contact />
  `,
  styles: ``,
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
})
export class CharityComponent {
  charity = [
    { label: "Home", route: "home" },
    { label: "About Us", route: "join" },
    { label: "faq", route: "faq" },
    { label: "Contact", route: "contact" },
  ];

  // hoportfolio swiper
  swiperConfig: SwiperOptions = {
    modules: [Thumbs, FreeMode, Pagination],
    initialSlide: 3,
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
  };
}

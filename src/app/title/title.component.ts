import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  translate = inject(TranslationService);
  bgLeft: string = "/assets/img/bg/intro-blue-shadow.png";
  bgRight: string = "/assets/img/bg/intro-darkblue-shadow.png";

  // Scroll to a specific element
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 200;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  ngOnInit(): void {
    const goUp = document.querySelector(".go-up") as HTMLElement | null;

    if (goUp) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          goUp.classList.add("active");
        } else {
          goUp.classList.remove("active");
        }
      });
    }
  }
}

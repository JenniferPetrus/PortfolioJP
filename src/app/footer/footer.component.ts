import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ImprintService } from '../imprint.service';
import { Observable } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  translate = inject(TranslationService);
  
  isImprintVisible$: Observable<boolean>;

  constructor(public imprintService: ImprintService) {
    this.isImprintVisible$ = this.imprintService.imprintVisible$;
  }

  toggleImprint() {
    this.imprintService.toggleImprint();
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
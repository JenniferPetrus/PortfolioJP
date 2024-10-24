import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../translation.service';
import { ImprintService } from '../imprint.service';
import { Observable } from 'rxjs';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule, RouterModule, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  translate = inject(TranslationService);
  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
    privacy: ""
  };

  mailTest = false;
  isSubmitted: boolean = false;
  isImprintVisible$: Observable<boolean>;

  constructor(public imprintService: ImprintService) {
    this.isImprintVisible$ = this.imprintService.imprintVisible$;
  }

  ngOnInit(): void {
  }

  toggleImprint() {
    this.imprintService.toggleImprint();
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid) {
      const formData = new URLSearchParams();
      formData.append('email', this.contactData.email);
      formData.append('message', this.contactData.message);
      formData.append('name', this.contactData.name);
      
      this.http.post('https://formspree.io/f/manyyovl', formData.toString(), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .subscribe({
        next: (response) => {
          this.isSubmitted = true;
          ngForm.resetForm();
          this.hideSuccessMessageAfterDelay();
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
    }
  }

  hideSuccessMessageAfterDelay() {
    setTimeout(() => {
      this.isSubmitted = false;
    }, 5000);
  }
}

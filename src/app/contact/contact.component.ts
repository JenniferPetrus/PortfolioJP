import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule, RouterModule],
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

  post = {
    endPoint: 'https://jennifer-petrus.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
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
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.isSubmitted = true;
      ngForm.resetForm();
      this.hideSuccessMessageAfterDelay();
    }
  }

  hideSuccessMessageAfterDelay() {
    setTimeout(() => {
      this.isSubmitted = false;
    }, 5000);
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const arrow = document.querySelector('.arrow-container') as HTMLElement;

  if (arrow) {
    arrow.addEventListener('click', scrollToTop);
  }
});

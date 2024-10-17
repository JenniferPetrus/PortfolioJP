import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
[x: string]: any;
  translate = inject(TranslationService);
  teamMembers = [
    {
      name: 'Ingolf Stein',
      photo: './assets/img/man.jpg',
      textKey: 'currentMember.ingolf.text'
    },
    {
      name: 'Anna Fritz',
      photo: './assets/img/anna.jpg',
      textKey: 'currentMember.anna.text'
    }
  ];

  currentIndex = 0;
reviews: any;

  showNextMember() {
    this.currentIndex = (this.currentIndex + 1) % this.teamMembers.length;
  }

  showPreviousMember() {
    this.currentIndex = (this.currentIndex - 1 + this.teamMembers.length) % this.teamMembers.length;
  }

  get currentMember() {
    return this.teamMembers[this.currentIndex];
  }
}

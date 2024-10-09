import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {
  bgLeft: string = "/assets/img/bg/intro-blue-shadow.png";
  bgRight: string = "/assets/img/bg/intro-darkblue-shadow.png";
}

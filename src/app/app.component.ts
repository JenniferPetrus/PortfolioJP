import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { TitleComponent } from "./title/title.component";
import { AboutComponent } from "./about/about.component";
import { SkillsComponent } from "./skills/skills.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";
import { ReviewsComponent } from "./reviews/reviews.component";
import { FormsModule } from '@angular/forms';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    NavbarComponent, 
    TitleComponent, 
    AboutComponent, 
    SkillsComponent, 
    ProjectsComponent, 
    ContactComponent, 
    FooterComponent, 
    ReviewsComponent, 
    FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit() {
    AOS.init();
  }
}
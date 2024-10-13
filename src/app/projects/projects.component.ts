import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslationService } from '../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  translate = inject(TranslationService);
  projects: any = [
    {
      mainImage: "/assets/img/portfolio/Join01.png",
      backgroundImage: "/assets/img/portfolio/Join00.png",
      gitLink: 'https://github.com/JenniferPetrus/Join',
      liveLink: 'https://join-9ps.pages.dev',
      title: 'JOIN',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      tags: ['Javascript', 'HTML', 'CSS']
    },
    {
      mainImage: "/assets/img/portfolio/Pollo-Loco01.png",
      backgroundImage: "/assets/img/portfolio/Pollo-Loco00.png",
      gitLink: 'https://github.com/JenniferPetrus/Projekt12-El-Pollo-Loco',
      liveLink: 'https://el-pollo-loco-4r5.pages.dev',
      title: 'El Pollo Loco',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      tags: ['Javascript', 'HTML', 'CSS']
    },
    {
      mainImage: "/assets/img/portfolio/Pokedex01.png",
      backgroundImage: "/assets/img/portfolio/Pokedex00.png",
      gitLink: 'https://github.com/JenniferPetrus/Projekt9-Pokedex',
      liveLink: 'https://projekt9-pokedex.pages.dev',
      title: 'Pokedex',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      tags: ['JavaScript | HTML | CSS | Api']
    },
  ]

  getPortfolio() {
    return this.projects;
  }
}

import { CommonModule } from '@angular/common';
import { TechnologiesService } from './../../services/technologies.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  Math = Math;
  technologies: any[] = [];

  constructor(private techService: TechnologiesService) {}

  ngOnInit(): void {
    this.technologies = this.techService.getTechnologies();
  }
}

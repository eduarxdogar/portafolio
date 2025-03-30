import { CommonModule } from '@angular/common';
import { TechnologiesService } from './../../services/technologies.service';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-about',
  imports: [ RouterLink,CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  skills: { name: string; icon: string }[] = [];
  constructor(private technologiesService: TechnologiesService) {}

  ngOnInit() {
    this.skills = this.technologiesService.getTechnologies();
  }
}

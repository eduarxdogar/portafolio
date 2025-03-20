import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TechnologiesService } from '../../services/technologies.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  skills: { name: string; icon: string }[] = [];
  constructor(private technologiesService: TechnologiesService) {}

  ngOnInit() {
    this.skills = this.technologiesService.getTechnologies();
  }
}

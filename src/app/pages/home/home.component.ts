import { Technology } from './../../domain/models/technology.model';
import { title } from 'process';
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { TechnologiesService } from '../../services/technologies.service';
import { CertificadosService } from '../../core/services/certificados.service';
import { MatIconModule } from '@angular/material/icon';


import { UiButtonComponent } from '../../shared/ui/ui-button/ui-button.component';
import { UiBadgeComponent } from '../../shared/ui/ui-badge/ui-badge.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatIconModule, UiButtonComponent, UiBadgeComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

  Math = Math;
  technologies: Technology[] = [];
  
  private techService = inject(TechnologiesService);
  private certificadosService = inject(CertificadosService);

  certificates = this.certificadosService.certificates;

  constructor() {}

  ngOnInit(): void {
    this.technologies = this.techService.getTechnologies();
  }

  downloadCv() {
    const link = document.createElement('a');
    link.download = 'Cristian_Garzon_CV.pdf';
    link.href = 'assets/cv.pdf'; // Make sure this file exists or update path
    link.click();
  }
}

import { Technology } from './../../domain/models/technology.model';
import { title } from 'process';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TechnologiesService } from '../../services/technologies.service';
import { CertificadosService } from '../../services/certificados.service';
import { Certificate } from './../../domain/models/certificate.model';
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
  certificates: Certificate[] = []; 

  constructor(private techService: TechnologiesService,
   private certificadosService: CertificadosService
  ) {}

  ngOnInit(): void {
    this.technologies = this.techService.getTechnologies();
    this.certificates = this.certificadosService.getCertificados();
  }

  downloadCv() {
    const link = document.createElement('a');
    link.download = 'Cristian_Garzon_CV.pdf';
    link.href = 'assets/cv.pdf'; // Make sure this file exists or update path
    link.click();
  }
}

import { CommonModule } from '@angular/common';
import { TechnologiesService } from './../../services/technologies.service';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CertificadosService } from '../../core/services/certificados.service';


@Component({
  selector: 'app-about',
  imports: [ RouterLink,CommonModule,MatIconModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  private technologiesService = inject(TechnologiesService);
  private certificadosService = inject(CertificadosService);
  
  skills = this.technologiesService.getTechnologies();
  certificates = this.certificadosService.certificates;
}

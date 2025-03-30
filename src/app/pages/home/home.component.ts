import { Technology } from './../../domain/models/technology.model';
import { title } from 'process';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TechnologiesService } from '../../services/technologies.service';
import { CertificadosService } from '../../services/certificados.service';
import { Certificate } from './../../domain/models/certificate.model';


@Component({
  selector: 'app-home',
  imports: [ CommonModule],
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
}

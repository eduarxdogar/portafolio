import { Injectable, signal } from '@angular/core';
import { Certificate } from '../../domain/models/certificate.model';

@Injectable({
  providedIn: 'root',
})
export class CertificadosService {
  private _certificates = signal<Certificate[]>([
    {
      title: 'TÉCNICO EN PROGRAMACIÓN DE SOFTWARE',
      link: 'assets/certificados/certificado sena.pdf',
    },
    {
      title: 'VARIABLES Y ESTRUCTURAS DE CONTROL EN JAVA',
      link: 'assets/certificados/variables certi.pdf',
    },
    {
      title: 'Ciberseguridad con Microsoft Azure AD',
      link: 'assets/certificados/certicyber.pdf',
    },
    {
      title: 'Diploma React Vite TailwindCSS',
      link: 'assets/certificados/diploma-react-vite-tailwindcss.pdf',
    },
    {
      title: 'Diploma TypeScript',
      link: 'assets/certificados/diploma-typescript.pdf',
    },
    {
      title: 'Diploma TypeScript tipos avanzados',
      link: 'assets/certificados/diploma-typescript-tipos-avanzados.pdf',
    },
    {
      title: 'Certificado Laboral Credibanco',
      link: 'assets/certificados/certificado credi.pdf',
    },
    {
      title: 'Certificado Laboral Linktic Semi senior Full Stack',
      link: 'assets/certificados/laborallinktic.pdf',
    },
  ]);

  readonly certificates = this._certificates.asReadonly();
}

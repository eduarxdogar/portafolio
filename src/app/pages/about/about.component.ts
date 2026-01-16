import { CommonModule } from '@angular/common';
import { TechnologiesService } from './../../services/technologies.service';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, BookOpen, CheckCircle, PenTool, TrendingUp, Heart, Dumbbell, Gamepad2, GraduationCap, Code2, Baby, Notebook, Award, ExternalLink, Rocket } from 'lucide-angular';
import { CertificadosService } from '../../core/services/certificados.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, CommonModule, LucideAngularModule],
  providers: [{ provide: 'LUCIDE_ICONS', useValue: { BookOpen, CheckCircle, PenTool, TrendingUp, Heart, Dumbbell, Gamepad2, GraduationCap, Code2, Baby, Notebook, Award, ExternalLink, Rocket } }],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  private technologiesService = inject(TechnologiesService);
  private certificatesService = inject(CertificadosService);
  
  skills = this.technologiesService.getTechnologies();
  certificates = this.certificatesService.certificates;

  // Icon exposure for template
  readonly BookOpen = BookOpen;
  readonly CheckCircle = CheckCircle;
  readonly PenTool = PenTool;
  readonly TrendingUp = TrendingUp;
  readonly Heart = Heart;
  readonly Dumbbell = Dumbbell;
  readonly Gamepad2 = Gamepad2;
  readonly GraduationCap = GraduationCap;
  readonly Code2 = Code2;
  readonly Baby = Baby;
  readonly Notebook = Notebook;
  readonly Award = Award;
  readonly ExternalLink = ExternalLink;
  readonly Rocket = Rocket;
}

import { Component, Input, OnInit, signal, inject, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ProjectDetailService } from '../../services/project-detail.service';
import { ProjectDetail } from '../../domain/models/project-detail';
import { LucideAngularModule, ArrowLeft, Github, ExternalLink, Code2, Layers, Server, Layout, Target, Lightbulb, CheckCircle, Loader } from 'lucide-angular';
import { UiBadgeComponent } from '../../shared/ui/ui-badge/ui-badge.component';
import { register } from 'swiper/element/bundle';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule, MarkdownModule],
  providers: [{ provide: 'LUCIDE_ICONS', useValue: { ArrowLeft, Github, ExternalLink, Code2, Layers, Server, Layout } }],
  templateUrl: './project-detail.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectDetailComponent implements OnInit, AfterViewInit {
  @Input() id?: string; // Should be populated by Router withComponentInputBinding

  private projectDetailService = inject(ProjectDetailService);
  private router = inject(Router);

  project = signal<ProjectDetail | undefined>(undefined);

  // Icons exposure
  readonly ArrowLeft = ArrowLeft;
  readonly Github = Github;
  readonly ExternalLink = ExternalLink;
  readonly Layers = Layers;
  readonly Target = Target;
  readonly Lightbulb = Lightbulb;
  readonly CheckCircle = CheckCircle;
  readonly Code2 = Code2;
  readonly Loader = Loader;

  @ViewChild('swiper') swiperRef!: ElementRef;

  constructor() {
    register();
  }

  ngOnInit() {
    console.log('ProjectDetailComponent Initialized');
    console.log('Input ID received:', this.id);

    if (this.id) {
      const projectId = Number(this.id);
      console.log('Searching for Project ID (number):', projectId);
      
      const foundProject = this.projectDetailService.getProjectById(projectId);
      
      if (foundProject) {
        console.log('Project found:', foundProject.title);
        this.project.set(foundProject);
      } else {
        console.error('Project NOT found for ID:', projectId);
      }
    } else {
      console.error('ERROR: No ID received! Ensure withComponentInputBinding() is in app.config.ts');
    }
  }

  ngAfterViewInit(): void {
    if (this.swiperRef?.nativeElement) {
      const swiperEl = this.swiperRef.nativeElement;
      const swiperParams = {
        slidesPerView: 1,
        breakpoints: {
          768: {
            slidesPerView: 1.5,
            centeredSlides: true,
            spaceBetween: 30
          }
        },
        navigation: true,
        pagination: { clickable: true },
        effect: 'coverflow', // Changed to coverflow for better visual depth
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true // Enable shadows for depth
        },
        keyboard: { enabled: true }, // Enable keyboard navigation
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        loop: false, 
        centeredSlides: true,
        initialSlide: 0,
        grabCursor: true
      };
      Object.assign(swiperEl, swiperParams);
      swiperEl.initialize();
    }
  }
}

import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { RouterModule } from '@angular/router';
import { ProjectService } from '../../core/services/project.service';
import { inject } from '@angular/core';

import { UiBadgeComponent } from '../../shared/ui/ui-badge/ui-badge.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, UiBadgeComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChild('swiper') swiperRef!: ElementRef;

  private projectService = inject(ProjectService);
  cover: string = '';
  projects = this.projectService.projects;

  constructor() {
    register();
  }

  ngAfterViewInit(): void {
    const swiperEl = this.swiperRef.nativeElement;

    const swiperParams = {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: true,
      pagination: { clickable: true },
      effect: 'coverflow', // or 'cards'
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    };

    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();
  }

  changeCover(newImg: string) {
    this.cover = newImg;
  }
}

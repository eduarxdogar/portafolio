import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectService } from '../../core/services/project.service';
import { inject } from '@angular/core';
import { UiCardComponent } from '../../shared/ui/ui-card/ui-card.component';
import { UiBadgeComponent } from '../../shared/ui/ui-badge/ui-badge.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, UiCardComponent, UiBadgeComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  private projectService = inject(ProjectService);
  cover: string = '';
  projects = this.projectService.projects;

  changeCover(newImg: string) {
    this.cover = newImg;
  }
}

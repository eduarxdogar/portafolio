import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectDetailService } from '../../services/project-detail.service';

@Component({
  selector: 'app-project-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit {
  cover: string = '';
  projects: any[] = [];
  project: any;

  constructor(
    private route: ActivatedRoute,
    private projectDetailService: ProjectDetailService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      const projectId = +id;
      this.project = this.projectDetailService.getProjectById(projectId);
      if (this.project && this.project.images.length > 0) {
        this.cover = this.project.images[0];
      } else {
        console.error('Project not found or has no images.');
      }
    } else {
      console.error('ID is null');
    }
  }

  changeCover(newImg: string) {
    this.cover = newImg;
  }
}

import { routes } from './../../app.routes';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
@Component({
  selector: 'app-projects',
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  cover: string = '';
  projects: any[] = [];
  project: any;
  constructor(private projectService: ProjectService) {}
  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  changeCover(newImg: string) {
    this.cover = newImg;
  }
}

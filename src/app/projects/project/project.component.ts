import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from '../projects.service';
import { Project } from "../project.modal";
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor(private router: Router, private projectsService: ProjectsService) { }
  projects: Project[] = [];

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects();
  }

  openProject(id: number){
    console.log(id);
    this.router.navigate(['/projects/' + id]);
  }

}

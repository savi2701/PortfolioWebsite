import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  projectDetail = [
    {
      heading: "Portfolio Website",
      subheading: "My portfolio website to showcase my work and skills.",
      aim : {
        heading: "The aim was to create a portfolio website from scratch, without the use of any external library like Bootstrap or Tailwind. The entire project is created using Angular, HTML and SCSS. All the illustrations are used from undraw.co.",
        subheading: "The design inspiration was taken from the portfolio website of Sean Halpin."
      }
      
    },
    {
      heading: "Portfolio Website2",
      subheading: "My portfolio website to showcase my work and skills.",
      aim : {
        heading: "The aim was to create a portfolio website from scratch, without the use of any external library like Bootstrap or Tailwind. The entire project is created using Angular, HTML and SCSS. All the illustrations are used from undraw.co.",
        subheading: "The design inspiration was taken from the portfolio website of Sean Halpin."
      
      }
    }
  ]
  selectedProject: any;
  id!: number;
  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.selectedProject = this.projectDetail[this.id - 1];
  }

}

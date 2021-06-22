import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      type : "Website",
      name : "Portfolio Website",
      imgSrc : "../../assets/images/Portfolio.png"
    },
    {
      type: "Web App",
      name: "Cowin Solution",
      imgSrc : "../../assets/images/cowin.png"
    },
    {
      type: "Web App",
      name: "URL Shortening App",
      imgSrc: "../../assets/images/Portfolio.png"
    },
    {
      type: "Website",
      name: "Mario Kart Google Maps",
      imgSrc: "../../assets/images/Portfolio.png"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

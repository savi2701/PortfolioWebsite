import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class ProjectsService {
    private projects = [
        {
          id: 1,
          heading : "Designing and Developing my Portfolio Website",
          subheading: "The journey of designing and developing my first main project using Angular.",
          img : "../../../assets/images/portfolio2.png"
        },
        {
          id: 1,
          heading : "A quick app to find covid vaccine slots.",
          subheading: "A small app created to track cowin vaccine centers, using the Aarogya Setu API.",
          img : "../../../assets/images/covid.png"
        },
        {
          id: 1,
          heading : "Designing and Developing my Portfolio Website",
          subheading: "The journey of designing and developing my first main project using Angular.",
          img : "../../../assets/images/portfolio2.png"
        },
        {
          id: 1,
          heading : "Designing and Developing my Portfolio Website",
          subheading: "The journey of designing and developing my first main project using Angular.",
          img : "../../../assets/images/portfolio2.png"
        },
    ];

    getProjects(){
        return this.projects.slice();
    }
      
}
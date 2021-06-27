import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class ProjectsService {
    private projects = [
        {
          id: 1,
          type : "Website",
          name : "Portfolio Website",
          imgSrc : "../../assets/images/Portfolio.png"
        },
        {
          id: 2,
          type: "Web App",
          name: "Cowin Solution",
          imgSrc : "../../assets/images/cowin.png"
        },
        {
          id: 3,
          type: "Web App",
          name: "URL Shortening App",
          imgSrc: "../../assets/images/Portfolio.png"
        },
        {
          id: 4,
          type: "Website",
          name: "Mario Kart Google Maps",
          imgSrc: "../../assets/images/Portfolio.png"
        }
    ];

    getProjects(){
        return this.projects.slice();
    }
      
}
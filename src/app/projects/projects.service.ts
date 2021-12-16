import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class ProjectsService {
    private projects = [
        {
          id: 1,
          heading : "Designing and Developing my Portfolio Website",
          subheadings : [
            "A high-performance, Responsive website that uses the power of creative javascript powered animations for enriching user experience.",
            "The entire website is built using Angular as the main framework. I have also used various plugins like SVG3DCloud.",
            "I have single handedly worked on design and development of the website."
          ],
          link: "",
          img : "../../../assets/images/portfolio2.png",
          gitLink: "https://github.com/savi2701/PortfolioWebsite"
        },
        {
          id: 2,
          heading : "Crypto Savvy",
          subheadings : [
            "A crypto currency tracking app, which uses Angular as its main framework.",
            "I  have made a use of CoinMarketCap API.",
            "Besides tracking crypto, I have also designed a calculator to convert one currency into another."
          ],
          link: "https://wizardly-wing-f4a229.netlify.app/",
          img : "../../../assets/images/crypto.svg",
          gitLink: "https://github.com/savi2701/crypto-savvy"
        },
        {
          id: 3,
          heading : "My Cowin",
          subheadings: [
            "In this project, I made an effort to display all the available slots for your vaccine",
            "It allows user to filter the result based on pincode and date"
          ],
          link: "https://peaceful-torvalds-d65268.netlify.app/",
          img : "../../../assets/images/covid.png",
          gitLink: ""

        }
    ];

    getProjects(){
        return this.projects.slice();
    }
      
}
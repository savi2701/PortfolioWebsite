import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  showMwebNavbar: boolean = false;
  
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleMwebNavbar(){
    this.showMwebNavbar = !this.showMwebNavbar;
    const links = document.querySelectorAll('.nav-links li');
    links.forEach(link =>{
      link.classList.toggle("fade")
    })
  }
}

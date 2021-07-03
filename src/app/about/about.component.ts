import { Component, ElementRef, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    var script = document.createElement("script");
    script.append(document.createTextNode(
      `
      $(document).ready(function(){
        var entries = [
            {label: 'HTML'},
            {label: 'SCSS'},
            {label: 'LESS'},
            {label: 'CSS'},
            {label: 'Bootstrap'},
            {label: 'BEM'},
            {label: 'Angular'},
            {label: 'JavaScript'},
            {label: 'Git'},
            {label: 'TypeScript'},
            {label: 'jQuery'},
            {label: 'C'},
            {label: 'Gulp'},
            {label: 'C++'},
            {label: 'SQL'},
        ];

        var settings = {
            entries : entries,
            width: 600,
            height: 600,
            radius: '85%',
            radiusMin: 95,
            bgColor: '#000',
            borderRadius: '10',
            opacityOver: 1.00,
            opacityOut: 0.3,
            opacitySpeed: 6,
            fov: 800,
            speed: 1,
            fontFamily: 'Courier, Arial, sans-serif',
            fontSize:'30',
            fontColor:'#a162e8',
            fontWeight:'800',
            fontStyle: 'normal',
            fontStretch:'normal',
            
    };
    $('#tag').svg3DTagCloud(settings);
    })
      `
    ))
    this.elRef.nativeElement.append(script);
  }

  
}

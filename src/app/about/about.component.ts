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
            {label: 'HTML', url: 'javascript:void(0)', target: '_top'},
            {label: 'SCSS', url: 'javascript:void(0)', target: '_top'},
            {label: 'LESS', url: 'javascript:void(0)', target: '_top'},
            {label: 'CSS', url: 'javascript:void(0)', target: '_top'},
            {label: 'Bootstrap', url: 'javascript:void(0)', target: '_top'},
            {label: 'BEM', url: 'javascript:void(0)', target: '_top'},
            {label: 'Angular', url: 'javascript:void(0)', target: '_top'},
            {label: 'JavaScript', url: 'javascript:void(0)', target: '_top'},
            {label: 'Git', url: 'javascript:void(0)', target: '_top'},
            {label: 'TypeScript', url: 'javascript:void(0)', target: '_top'},
            {label: 'jQuery', url: 'javascript:void(0)', target: '_top'},
            {label: 'C', url: 'javascript:void(0)', target: '_top'},
            {label: 'Gulp', url: 'javascript:void(0)', target: '_top'},
            {label: 'C++', url: 'javascript:void(0)', target: '_top'},
            {label: 'SQL', url: 'javascript:void(0)', target: '_top'},
            {label: 'Figma', url: 'javascript:void(0)', target: '_top'},
            {label: 'AdobeXD', url: 'javascript:void(0)', target: '_top'},
        ];

        var settings = {
            entries : entries,
            width: 600,
            height: 600,
            radius: '75%',
            radiusMin: 95,
            borderRadius: '10',
            opacityOver: 1.00,
            opacityOut: 0.3,
            opacitySpeed: 6,
            fov: 800,
            speed: 1,
            fontFamily: 'Bogart',
            fontSize:'30',
            fontColor:'#a162e8',
            fontWeight:'bold',
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

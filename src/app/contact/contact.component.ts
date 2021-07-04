import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare var L:any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  msgForm!: FormGroup;

  ngOnInit(): void {
    var mymap = L.map('mapid').setView([28.984644, 77.705956], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/tintin-2701/ckqosr8xq2orh18lev7u7gzxu/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGludGluLTI3MDEiLCJhIjoiY2txb3J5OHhyMHA4aTJvc3RhYXJiNzExZSJ9.9tvVrjh4uiPyxjbWVIKsbg', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
    }).addTo(mymap);
    var marker = L.marker([28.984644, 77.705956]).addTo(mymap);
    marker.bindPopup("<b>Namaste!</b><br>Send me a message!!.").openPopup();


    this.msgForm = new FormGroup({
      'name': new FormControl(null),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'subject': new FormControl(null),
      'message': new FormControl(null, Validators.required),
    })
  }

  onSubmit(){
    console.log(this.msgForm);
  }

}

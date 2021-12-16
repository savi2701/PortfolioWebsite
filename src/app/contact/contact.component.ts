import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

declare var L:any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  name: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  message: FormControl = new FormControl("", [Validators.required, Validators.maxLength(256)]);
  honeypot: FormControl = new FormControl(""); // we will use this to prevent spam
  submitted: boolean = false; // show and hide the success message
  isLoading: boolean = false; // disable the submit button if we're loading
  responseMessage: string = ""; // the response message to show to the user
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      message: this.message,
      honeypot: this.honeypot
    });
  }

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


    // this.msgForm = new FormGroup({
    //   'name': new FormControl(null),
    //   'email': new FormControl(null, {validators: [Validators.required, Validators.email], updateOn: 'submit' }),
    //   'subject': new FormControl(null),
    //   'message': new FormControl(null,{validators: [Validators.required], updateOn: 'submit' }),
    // })
  }

  // onSubmit(){
  //   console.log(this.msgForm);
  // }
  onSubmit() {
    if (this.form.status == "VALID" && this.honeypot.value == "") {
      this.form.disable(); // disable the form if it's valid to disable multiple submissions
      var formData: any = new FormData();
      formData.append("name", this.form.get("name")?.value);
      formData.append("email", this.form.get("email")?.value);
      formData.append("message", this.form.get("message")?.value);
      this.isLoading = true; // sending the post request async so it's in progress
      this.submitted = false; // hide the response message on multiple submits
      this.http.post("https://script.google.com/macros/s/AKfycbzN-9KXARsazgpcl2ZAqh4ZA5A7BxOYYbe8U_rquwRMiEm1PAcqb8aSDKDfCiFsgFw-/exec", formData).subscribe(
        (response) => {
          // choose the response message
          this.responseMessage = "Thanks for the message! I'll get back to you soon!";
          // if ( response == "success") {
          //   this.responseMessage = "Thanks for the message! I'll get back to you soon!";
          // } else {
          //   this.responseMessage = "Oops! Something went wrong... Reload the page and try again.";
          // }
          this.form.reset();
          this.form.enable(); // re enable the form after a success
          this.submitted = true; // show the response message
          this.isLoading = false; // re enable the submit button
          console.log(response);
          
        },
        (error) => {
          this.responseMessage = "Oops! An error occurred... Reload the page and try again.";
          this.form.enable(); // re enable the form after a success
          this.submitted = true; // show the response message
          this.isLoading = false; // re enable the submit button
          console.log(error);
        }
      );
    }
  }

}

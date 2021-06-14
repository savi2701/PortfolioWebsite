import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appEyeActive]'
})
export class EyeActiveDirective {

  constructor() { }
  @HostListener('mouseenter') mouseover(eventData: Event){
   let eyes = document.getElementById('googly-eyes');
    eyes?.classList.add('active');
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    let eyes = document.getElementById('googly-eyes');
     eyes?.classList.remove('active');
   }
  

}

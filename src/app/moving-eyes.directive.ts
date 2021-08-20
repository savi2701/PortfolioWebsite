import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMovingEyes]'
})
export class MovingEyesDirective {

  constructor(private el: ElementRef) { }
  @HostBinding('style.transform') rotate : string="rotate(0deg)";
  @HostListener('document: mousemove', ['$event'])
  OnMouseMove(e: any){
    var eyeball = this.el.nativeElement;
    let x = (eyeball.getBoundingClientRect().left) + (eyeball.clientWidth/2);
    let y = (eyeball.getBoundingClientRect().top) + (eyeball.clientHeight/2);
    let radian = Math.atan2(e.pageX- x, e.pageY - y);
    let rot = (radian * (180 / Math.PI) * -1) + 90;
    this.rotate = "rotate("+ rot + "deg)";
  }
}



import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @Input() name;

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.background = 'orange';
    this.el.nativeElement.style.color = 'white';
  }

  changeBackground(bgColor){
    this.el.nativeElement.style.background=bgColor
  }
}

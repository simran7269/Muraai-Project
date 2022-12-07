import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appButtonDir]'
})
export class ButtonDirDirective {

  constructor(private el:ElementRef) { }
   @HostListener('click') onclick() {
    this.el.nativeElement.style.backgroundColor ="pink";
  }
  @HostListener('mouseleave') leave() {
    this.el.nativeElement.style.backgroundColor ="";
  }

}

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHiglight]'
})
export class HiglightDirective {

  @Input('color') color: any
  @Input('background') background: any
  @Input('font-weight') fontweight:any

  constructor(private element:ElementRef) { }
    @HostListener('mouseenter') onenter() {
      this.element.nativeElement.style.color =this.color

    this.element.nativeElement.style.backgroundColor =this.background;
    this.element.nativeElement.style['font-weight']= this.fontweight
    
  }
  // @HostListener('click') onclick() {
  //   this.element.nativeElement.style.backgroundColor ="pink";
  // }
  @HostListener('mouseleave') onMouseLeave() {

this.element.nativeElement.style.backgroundColor = '';
this.element.nativeElement.style['font-weight']= '';
this.element.nativeElement.style.color='';
  }
}

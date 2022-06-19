import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective {

  @Input() appBackgroundColor:any;
  constructor(private el:ElementRef,private renderer:Renderer2) { 
    renderer.setStyle(el.nativeElement,'margin-left','300px');
    this.el.nativeElement.style.color=this.appBackgroundColor;
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.color=this.appBackgroundColor;
    this.border="solid 2px green";
    this.change(this.appBackgroundColor);
  }

  @HostListener('mouseleave') onMouseLeaves(){
    this.change('violet');
  }

  @HostBinding('style.border') border:string | undefined;

  change(color:string){
    this.el.nativeElement.style.background=color;
  }

}

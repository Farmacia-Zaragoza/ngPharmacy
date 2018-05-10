import { Directive, Input, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[TextLimit]'
})
export class TextLimitDirective implements AfterViewInit {

  constructor(private el: ElementRef) {}

  @Input('TextLimit') limit;

  ngAfterViewInit(){
    let html:String = this.el.nativeElement.innerHTML;
    if(html.length > this.limit)
      this.el.nativeElement.innerHTML = html.slice(0,this.limit)+'...';
  }

}

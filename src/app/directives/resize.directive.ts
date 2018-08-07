import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import { Code } from '../services/code';

@Directive({
  selector: '[resize]'
})
export class ResizeDirective implements OnInit {

  element: any;
  private canvas: any;
  
  constructor(el: ElementRef, public code: Code) {
    this.element = el.nativeElement;
  }

  @HostListener('window:resize', ['$event'])

  ngOnInit() {
     this.autoSizeText(this.element);
  }
  
  onResize(event){
     this.autoSizeText(this.element);
  }

  getTextWidth (text, size) {
    // if given, use cached canvas for better performance else, create new canvas
    var canvas = this.canvas || (this.canvas = document.createElement('canvas'))
    var context = canvas.getContext('2d')
    context.font = size + 'px san serif'
    var metrics = context.measureText(text)
    return metrics.width
  }

  getWidth (text, widthoffit) {
    var ctx = this;

    function testfit(size, lower, upper) {
      var testsize = ctx.getTextWidth(text, size)
      if (widthoffit - testsize < 20 && testsize < widthoffit || testsize === lower + 1) {
        return 0; 
      }

      if (size === lower || size === upper) {
        return 0;
      }

      return (testsize < widthoffit) ? 1 : -1;
    }
      
    return this.code.search(testfit, 40, 300)
  }

  autoSizeText (element) {
    let text = element.textContent;
    if (text) {
      let width = this.getWidth(text, element.clientWidth);
      element.style.fontSize =  width + 'px';
    }
  }

}

import { Directive, ElementRef, HostListener } from '@angular/core';
import { Code } from '../services/code';

@Directive({
  selector: '[resize]'
})
export class ResizeDirective {

  element: any;
  
  constructor(el: ElementRef, public code: Code) {
    this.element = el.nativeElement;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event){
     this.autoSizeText(this.element);
  }

  getTextWidth (text, font) {
    // if given, use cached canvas for better performance else, create new canvas
    //var canvas = this.getTextWidth.canvas || (this.getTextWidth.canvas = document.createElement('canvas'))
    var canvas = document.createElement('canvas')
    var context = canvas.getContext('2d')
    context.font = font
    var metrics = context.measureText(text)
    return metrics.width
  }

  getWidth (text, widthoffit) {
    var ctx = this;

    function testfit(size, lower, upper) {
      var testsize = ctx.getTextWidth(text, size + 'px san serif')
      if (widthoffit - testsize < 20 && testsize < widthoffit || testsize === lower + 1) {
        return 0; 
      }

      if (size === lower || size === upper) {
        return 0;
      }

      if (testsize < widthoffit) {
        return 1
      } else {
        return -1
      }
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

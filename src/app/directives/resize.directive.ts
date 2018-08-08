import { Directive, ElementRef, HostListener } from '@angular/core';
import { Code } from '../services/code';

@Directive({
  selector: '[tcs-resize]'
})
export class ResizeDirective {

  element: any;
  private canvas: any;

  constructor(el: ElementRef, public code: Code) {
    this.element = el.nativeElement;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.autoSizeText(this.element);
  }

  getTextWidth (text, size) {
    // if given, use cached canvas for better performance else, create new canvas
    const canvas = this.canvas || (this.canvas = document.createElement('canvas'));
    const context = canvas.getContext('2d');
    context.font = size + 'px san serif';
    const metrics = context.measureText(text);
    return metrics.width;
  }

  getWidth (text, widthoffit) {
    const ctx = this;
    function testfit(size, lower, upper) {
      const testsize = ctx.getTextWidth(text, size);
      if (widthoffit - testsize < 20 && testsize < widthoffit || testsize === lower + 1) {
        return 0;
      }

      if (size === lower || size === upper) {
        return 0;
      }

      return (testsize < widthoffit) ? 1 : -1;
    }

    return this.code.search(testfit, 40, 300);
  }

  autoSizeText (element) {
    const text = element.textContent;
    if (text) {
      const width = this.getWidth(text, element.clientWidth);
      element.style.fontSize =  width + 'px';
    }
  }

}

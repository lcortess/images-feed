import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLazyImage]'
})
export class LazyImageDirective {

  constructor(private element: ElementRef) {
    this.setObserver();
  }

  private setObserver(): void {
    var imageObserver = new IntersectionObserver((entries, observer) => {
      
      /**
       * Set image src
       */
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const image: any = entry.target;
          image.src = image.dataset.src;
          imageObserver.unobserve(image);
        }
      });
    });
    
    imageObserver.observe(this.element.nativeElement);
  }
}

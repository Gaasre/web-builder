import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[clickOutside]'
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef) { }

  // tslint:disable-next-line:no-output-rename
  @Output('clickOutside') clickOutside: EventEmitter<any> = new EventEmitter();

  @HostListener('click', ['$event.target']) onMouseEnter(targetElement) {
    console.log(targetElement);
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit(null);
    }
  }


}

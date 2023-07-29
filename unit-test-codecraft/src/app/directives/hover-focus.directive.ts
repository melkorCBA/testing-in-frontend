import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[hoverFocus]',
})
export class HoverFocusDirective {
  @HostBinding('style.backgroundColor') backgroundColour!: string;
  @HostListener('mouseover') onHover() {
    this.backgroundColour = 'blue';
  }
  @HostListener('mouseout') onLeave() {
    this.backgroundColour = 'inherit';
  }
  constructor() {}
}

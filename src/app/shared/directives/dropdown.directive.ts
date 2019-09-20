import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  constructor(private eleRef: ElementRef) {}


  /**
   *  Dropdown toggle on click event
   */

  // @HostListener('click') toggleOpen( eventData: Event) {
  //   this.isOpen = !this.isOpen;
  // }

  /**
   *  Dropdown close on mouseleave event
   */

  // @HostListener('mouseleave') mouseleave( eventData: Event) {
  //   this.isOpen = !this.isOpen;
  // }

  /**
   *  Dropdown close on if click out side of dropdown
   */

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.eleRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

}

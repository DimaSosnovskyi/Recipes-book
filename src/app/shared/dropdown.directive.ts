import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective implements OnInit {
  @HostBinding('class.open') isOpen: boolean = false;
  @HostListener('click') click(eventData: Event) {
    this.isOpen = !this.isOpen;
  }
  constructor(
    public renderer: Renderer2,
    public elementRef: ElementRef,
    ) {}
    ngOnInit() {

    }
}
import { Component, HostBinding, HostListener, Directive } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})

export class DropDownDirective {
  @HostBinding('class.open') isdropDownOpen: boolean = false;
  constructor() {}
  @HostListener('click') toggleOpen() {
    this.isdropDownOpen = !this.isdropDownOpen;
  }
}
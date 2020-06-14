import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective implements OnInit {
  // @Input() set appDropDown(condition) {
  //   if (condition) {
  //     this.vcRef.createEmbeddedView(this.templateRef);
  //   } else {
  //     this.vcRef.clear();
  //   }
  // }
  @HostBinding('class.open') isOpen: boolean = false;
  @HostListener('click') click(eventData: Event) {
    this.isOpen = !this.isOpen;
  }
  constructor(
    public renderer: Renderer2,
    public elementRef: ElementRef,
  
    // public templateRef: TemplateRef<any>,
    // public vcRef: ViewContainerRef
    ) {}
    ngOnInit() {

    }
}
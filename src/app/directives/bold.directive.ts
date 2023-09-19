import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appBold]",
})
export class BoldDirective {
  constructor(
    private el: ElementRef,
    private render: Renderer2,
  ) {
    this.render.setStyle(this.el.nativeElement, "cursor", "pointer");
  }

  @HostListener("mouseenter") onMouseEnter() {
    this.setStyle("1.2rem");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.setStyle("1rem");
  }

  setStyle(val: string) {
    this.render.setStyle(this.el.nativeElement, "font-size", val);
  }
}

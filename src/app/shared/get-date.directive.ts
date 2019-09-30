import {
  Directive,
  HostListener,
  Input,
  ElementRef,
  Renderer2
} from "@angular/core";

@Directive({
  selector: "[appGetDate]"
})
export class GetDateDirective {
  @Input()
  private date: Date;
  private paragraph;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // tslint:disable-next-line:quotemark
    this.paragraph = this.renderer.createElement("p");
  }

  // tslint:disable-next-line:quotemark
  @HostListener("mouseenter")
  mouseEnter() {
    this.paragraph.innerHTML = this.date.toLocaleDateString();
    this.renderer.appendChild(this.el.nativeElement, this.paragraph);
  }
  // tslint:disable-next-line:quotemark
  @HostListener("mouseleave")
  mouseLeave() {
    this.renderer.removeChild(this.el.nativeElement, this.paragraph);
  }
}

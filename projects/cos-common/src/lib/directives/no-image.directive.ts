import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "img[cosNoImage]",
})
export class CosNoImageDirective {

  constructor(private el: ElementRef) {}

  @HostListener("error")
  private onError() {
    //@TODO decided to use timeout after image load error, maybe it is redundant
    setTimeout(() => this.el.nativeElement.src = 'assets/img/no-image.png', 500);
  }
}

import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @Input() appColor:string;

  constructor(public element:ElementRef) { }

  ngOnInit()
  {
    console.log(this.element.nativeElement);
    if(this.appColor == "cerrada")
    {
      this.element.nativeElement.style.backgroundColor = "green";
    }
  }

}

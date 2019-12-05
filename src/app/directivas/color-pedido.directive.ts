import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appColorPedido]'
})
export class ColorPedidoDirective {

 @Input() appColorPedido:string;

  constructor(public element:ElementRef) { }

  ngOnInit()
  {
    if(this.appColorPedido    == "finalizado")
    {
      this.element.nativeElement.style.backgroundColor = "red";
    }
    else
    {
      this.element.nativeElement.style.backgroundColor = "green";

    }
  }
    
  }

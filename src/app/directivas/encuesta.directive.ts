import { Directive } from '@angular/core';

@Directive({
  selector: '[appEncuesta]'
})
export class EncuestaDirective {

 @Input() appEncuesta: any;

  constructor(public element:ElementRef) { }

  ngOnInit()
  {
    console.log(this.element.nativeElement);
    if(this.appEncuesta.puntuacionMesa > 5 && this.appEncuesta.puntuacionRestaurante > 5 && this.appEncuesta.puntuacionMozo > 5 && this.appEncuesta.puntuacionCocinero > 5)
    {
      this.element.nativeElement.style.backgroundColor = "green";
    }
    else
    {
       this.element.nativeElement.style.backgroundColor = "red";
    }
  }

}

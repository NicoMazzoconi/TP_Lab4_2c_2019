import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pesos'
})
export class PesosPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return "$"+value;
  }

}

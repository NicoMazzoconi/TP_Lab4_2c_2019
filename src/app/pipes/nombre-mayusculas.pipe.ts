import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'nombreMayusculas'
})
export class NombreMayusculasPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.toUpperCase();
  }

}

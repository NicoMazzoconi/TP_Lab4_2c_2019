import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primeraLetraMayuscula'
})
export class PrimeraLetraMayusculaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    value = value.toLowerCase();
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}

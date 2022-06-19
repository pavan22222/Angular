import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numbertostring'
})
export class NumbertoStringPipe implements PipeTransform {

  charArray:string="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  transform(index:number): string {
    return this.charArray.charAt(index);
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kilo',
})
export class KiloPipe implements PipeTransform {
  transform(value: number): string {
    const k = value / 1000;
    if (k < 1) return '' + value;
    return k + 'k';
  }
}

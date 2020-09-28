import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'exp' })
export class CustomPipe implements PipeTransform {
  transform(value: number, exponent?: number): number {
    return Math.pow(value, exponent);
  }
}

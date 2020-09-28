import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tracker',
})
export class TrackerPipe implements PipeTransform {
  transform(value: string, ...args: string[]): void {
    console.log('value' + value);
    console.log('args' + args);
  }
}

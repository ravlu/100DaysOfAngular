import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'debounce',
})
export class DebouncePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
    //	https://dzone.com/articles/5-usage-ideas-for-angular-pipes#:~:text=Pipes%20are%20a%20useful%20feature,and%20then%20returns%20a%20value.
  }
}

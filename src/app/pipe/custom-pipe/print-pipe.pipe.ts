import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'printCode'
})
export class PrintPipePipe implements PipeTransform {

  transform(value: any ): void {
    console.log(value);
  }

}

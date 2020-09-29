import { ChangeDetectorRef, NgZone, Pipe, PipeTransform } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Pipe({
  name: 'debounce',
})
export class DebouncePipe implements PipeTransform {
  private names = ['Ravi', 'Lucky', 'Name2'];
  public message$: Observable<string>;
  constructor(
    private changeDetector: ChangeDetectorRef,
    private zone: NgZone
  ) {}
  transform(value: any, debounceTime?: number): any {
    this.message$ = interval(5000).pipe(
      map((i) => this.names[i]),
      take(this.names.length)
    );
    return this.message$;
  }
}

import { Directive, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appSpyClass]',
})
export class SpyClassDirective implements OnInit, OnDestroy {
  constructor() {}
  ngOnInit(): void {
    console.log('ONINIT');
  }
  ngOnDestroy(): void {
    console.log('ONDestroy');
  }
}

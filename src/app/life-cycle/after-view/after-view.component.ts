import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ChildViewComponent } from './child-view/child-view.component';

@Component({
  selector: 'app-after-view',
  templateUrl: './after-view.component.html',
  styleUrls: ['./after-view.component.scss'],
})
export class AfterViewComponent implements AfterViewInit, AfterViewChecked {
  comment: string = '';
  private prevString: string = '';
  @ViewChild(ChildViewComponent) viewChild: ChildViewComponent;
  constructor() {}

  ngAfterViewInit(): void {
    //console.log('In after view Init' + this.prevString);
    console.log('after View initi');
    //console.log(this.viewChild);
  }
  ngAfterViewChecked(): void {
    console.log('in checked');
    if (this.prevString == this.viewChild.customString) {
      console.log('view checked');
    } else {
      console.log('else checked');
      this.prevString = this.viewChild.customString;
    }
    //console.log(this.viewChild);
    this.checkLimit();
  }
  private checkLimit(): void {
    const c: string =
      this.viewChild.customString.length > 10 ? 'long name' : '';
    console.log(c);
    console.log(this.comment);
    if (this.comment !== c) {
      setTimeout(() => (this.comment = c), 0);
    }
    //this.tick_then(() => (this.comment = c));
  }

  // schedules a view refresh to ensure display catches up
  //tick() {  this.tick_then(() => { }); }
  // tick_then(fn: () => any) {
  //   setTimeout(fn, 0);
  // }
}

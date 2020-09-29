import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-tutorialse',
  templateUrl: './tutorialse.component.html',
  styleUrls: ['./tutorialse.component.scss'],
})
export class TutorialseComponent implements OnChanges, OnInit {
  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?',
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?',
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?',
  ];
  public isChangesExecuted = false;
  public message$: Observable<string>;
  constructor() {}
  ngOnChanges(): void {
    this.isChangesExecuted = true;
  }
  ngOnInit(): void {
    this.resend();
  }
  public resend(): void {
    this.message$ = interval(1000).pipe(
      map((i) => this.messages[i]),
      take(this.messages.length)
    );
  }
}

import { Component, OnInit } from '@angular/core';
import * as template from './pipe.component.html';
@Component({
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss'],
})
export class PipeComponent implements OnInit {
  public currContent: string = template.default;
  public birthday: Date;
  public cost: number;
  public inputValue: string;
  constructor() {}

  ngOnInit(): void {
    this.birthday = new Date(1988, 2, 7);
    this.cost = 50;
  }
}

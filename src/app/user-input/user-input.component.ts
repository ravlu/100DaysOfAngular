import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as template from './user-input.component.html';
@Component({
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss'],
})
export class UserInputComponent implements OnInit {
  public currContent: string = template.default;
  public values: string;
  public conCatvalues: string;
  constructor() {}

  ngOnInit(): void {}

  public onAddMe(event: KeyboardEvent): void {
    this.values += (event.target as HTMLInputElement).value + '|';
  }

  public onAddTRF(str1: string, str2: string): void {
    this.conCatvalues = str1 + str2;
  }
  public onAddEnter(str1: string): void {
    this.values = str1;
  }
}

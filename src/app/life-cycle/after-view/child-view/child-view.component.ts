import { Component, Input, OnInit } from '@angular/core';
import { ICustomObject } from 'src/app/interfaces/icustom-object';

@Component({
  selector: 'app-child-view',
  templateUrl: './child-view.component.html',
  styleUrls: ['./child-view.component.scss'],
})
export class ChildViewComponent implements OnInit {
  @Input()
  get customString(): string {
    return this._name;
  }
  set customString(name: string) {
    this._name = (name && name.trim()) || 'no name set';
  }
  private _name: string = '';

  constructor() {}

  ngOnInit(): void {}
}

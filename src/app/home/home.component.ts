import { Component, OnInit } from '@angular/core';
import { ICustomObject } from '../interfaces/icustom-object';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public inputValue: string = 'text';
  public hereObject: ICustomObject = <ICustomObject>{ id: 1, name: 'ravi' };
  constructor() {}

  ngOnInit(): void {}
  public UpdateProp(value: string): void {
    this.inputValue = value;
    //this.hereObject.name = 'Ravi';
  }
  public UpdateObjectProp(value: string): void {
    //this.inputValue = value;
    this.hereObject.name = value;
  }
  public UpdateObject(value: string): void {
    //this.inputValue = value;

    if (this.hereObject.name !== value) {
      this.hereObject = <ICustomObject>{ id: 2, name: value };
    }
  }
}

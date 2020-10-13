import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { AdItem } from '../components/ad-item';
import { ICustomObject } from '../interfaces/icustom-object';
import { AdService } from '../services/ad.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ads: AdItem[];

  public inputValue: string = 'text';
  public hereObject: ICustomObject = <ICustomObject>{ id: 1, name: 'ravi' };
  constructor(public adService: AdService) {}

  ngOnInit(): void {
    this.ads = this.adService.getAds();
  }
 
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

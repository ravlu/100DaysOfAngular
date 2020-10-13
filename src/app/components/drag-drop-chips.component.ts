import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { AdComponent } from '../interfaces/ad.component';
import { ICustomObject } from '../interfaces/icustom-object';

@Component({
  selector: 'app-drag-drop-chips',
  template: `
<mat-chip-list cdkDropList #listOne="cdkDropList" [cdkDropListData]="firstList" (cdkDropListDropped)="drop($event)" [cdkDropListConnectedTo]="[listTwo]" aria-label="Fish selection">
  <mat-chip *ngFor="let item of firstList" cdkDrag>{{item.name}}</mat-chip>
  </mat-chip-list>


<mat-chip-list cdkDropList #listTwo="cdkDropList" [cdkDropListData]="secondList" (cdkDropListDropped)="drop($event)"  [cdkDropListConnectedTo]="[listOne]" aria-label="Fish selection">
  <mat-chip *ngFor="let item of secondList" cdkDrag>{{item.name}}</mat-chip>
</mat-chip-list>

<span *ngFor="let item of firstList">{{item.name}} </span>
<br>
<span *ngFor="let item of secondList">{{item.name}} </span>
  `,
  styles: [
    `
      .hero-profile {
        border: 1px solid gray;
        padding: 5px;
        padding-bottom: 20px;
        padding-left: 20px;
        border-radius: 10px;
        background-color: lightgreen;
        color: black;
      }
    `,
  ],
})
export class DragDropChipsComponent {
  @Input() data: any;
  firstList: Array<ICustomObject> = [
    <ICustomObject>{ id: 1, name: 'ravi' },
    <ICustomObject>{ id: 2, name: 'sunny' },
  ];
  secondList: Array<ICustomObject> = [
    <ICustomObject>{ id: 1, name: 'Sasi' },
    <ICustomObject>{ id: 2, name: 'Suhas' },
  ];
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  
}

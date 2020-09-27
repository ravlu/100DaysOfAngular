import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
public birthday: Date;
public cost: number;
  constructor() { }

  ngOnInit(): void {
    this.birthday = new Date(1988, 2, 7);
    this.cost = 50;
  }

}

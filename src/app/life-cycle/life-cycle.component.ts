import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss'],
})
export class LifeCycleComponent implements OnChanges, OnInit {
  @Input() public name: string;
  public isChangesExecuted = false;
  public inInitExecuted = false;
  constructor(private route: ActivatedRoute) {}
  ngOnChanges(): void {
    //  this.name = this.route.snapshot.params['name'];
    this.isChangesExecuted = true;
  }

  ngOnInit(): void {
    if (!this.isChangesExecuted && !this.name) {
      this.inInitExecuted = true;
      // this.name = this.route.snapshot.params['name'];
    }
  }
}

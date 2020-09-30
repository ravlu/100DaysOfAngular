import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICustomObject } from '../interfaces/icustom-object';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss'],
})
export class LifeCycleComponent
  implements
    OnChanges,
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterContentChecked,
    OnDestroy {
  @Input() public name: string;
  @Input() public customObject: ICustomObject;
  public isChangesExecuted = false;
  public inInitExecuted = false;
  constructor(private route: ActivatedRoute) {}
  ngOnChanges(changes: SimpleChanges): void {
    // ng changes will be executed only if the component has any input property
    // this.name = this.route.snapshot.params['name'];
    this.isChangesExecuted = true;
    console.log('OnChanges');
    console.log(changes);
    if (this.customObject) {
      console.log(this.customObject.id);
      console.log(this.customObject.name);
    }
  }

  ngOnInit(): void {
    if (!this.isChangesExecuted && !this.name) {
      this.inInitExecuted = true;
      // this.name = this.route.snapshot.params['name'];
    }
    console.log('ngOnInit');
  }
  // ngDoCheck(): void {
  //   console.log('ngDoCheck');
  // }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}

import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AdComponent } from '../interfaces/ad.component';
import { AdService } from '../services/ad.service';

@Component({
  // selector: 'app-hero-profile',
  template: `
    <div class="hero-profile">
      <h3>Featured Hero Profile</h3>
      <h4>{{ data.name }}</h4>

      <p>{{ data.bio }}</p>

      <strong>Hire this hero today!</strong>
    </div>
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
export class HeroProfileComponent implements AdComponent, OnInit {
  data: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adService: AdService
  ) {
    // console.log("con");
    // console.log(this.route);
    // console.log(this.route.paramMap);
    // console.log("end");
    // this.data = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.adService.getHero(Number(params.get('id')))
    //   )
    // );
  }
  ngOnInit() {
    console.log('OnInit');
    console.log(this.route);
    console.log(this.route.paramMap);
    // this.data = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.adService.getHero(Number(params.get('id')))
    //   )
    // );
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.data = this.adService.getHero(Number(params.get('id')));
    });
  }
}

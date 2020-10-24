import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdService } from 'src/app/services/ad.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit {
  profileID: number = 1;
  heros: any[];
  constructor(
    public adService: AdService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.heros = this.adService.getHeros();
  }
  setProfile(num: number): void {
    if (!num) {
      num = 1;
    }
  //  console.log(num);
    this.profileID = num - 1;
  //  this.router.navigate(['/hero', { id: this.profileID }]);
   // console.log(this.router.getCurrentNavigation());
   // console.log(this.route);
    //this.router.navigate(['/hero', { id: this.profileID }]);
    this.router.navigate(['/hero', this.profileID ]);
  }
}

import { Injectable } from '@angular/core';
import { AdItem } from '../components/ad-item';
import { HeroJobAdComponent } from '../components/hero-job-ad.component';
import { HeroProfileComponent } from '../components/hero-profile.component';

@Injectable({
  providedIn: 'root'
})
export class AdService {
items: any[] = [
  {id: 1 , name: 'Bombasto', bio: 'Brave as they come'},
  {id: 2 , name: 'Dr IQ', bio: 'Smart as they come'},
  {id: 3 , name: 'Jambru', bio: 'Brave as they come'},
  {id: 4 , name: 'Cascadio', bio: 'Smart as they come'},
  {id: 5 , name: 'Lambor', bio: 'Brave as they come'},
  {id: 6 , name: 'Susrush', bio: 'Smart as they come'}
];
  constructor() { }
  getAds() {
    return [
      // new AdItem(HeroProfileComponent, {name: 'Bombasto', bio: 'Brave as they come'}),

      // new AdItem(HeroProfileComponent, {name: 'Dr IQ', bio: 'Smart as they come'}),

      new AdItem(HeroJobAdComponent,   {headline: 'Hiring for several positions',
                                        body: 'Submit your resume today!'}),

      new AdItem(HeroJobAdComponent,   {headline: 'Openings in all departments',
                                        body: 'Apply today'}),
    ];
  }
  getHeros(){
    return this.items;
  }
  getHero(id: number): any{
    console.log(id);
    return this.items[id];
  }
}

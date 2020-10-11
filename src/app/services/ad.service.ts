import { Injectable } from '@angular/core';
import { AdItem } from '../components/ad-item';
import { HeroJobAdComponent } from '../components/hero-job-ad.component';
import { HeroProfileComponent } from '../components/hero-profile.component';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor() { }
  getAds() {
    return [
      new AdItem(HeroProfileComponent, {name: 'Bombasto', bio: 'Brave as they come'}),

      new AdItem(HeroProfileComponent, {name: 'Dr IQ', bio: 'Smart as they come'}),

      new AdItem(HeroJobAdComponent,   {headline: 'Hiring for several positions',
                                        body: 'Submit your resume today!'}),

      new AdItem(HeroJobAdComponent,   {headline: 'Openings in all departments',
                                        body: 'Apply today'}),
    ];
  }
}

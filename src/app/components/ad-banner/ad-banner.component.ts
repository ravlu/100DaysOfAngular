import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AdHostDirective } from 'src/app/directives/ad-host.directive';
import { AdComponent } from 'src/app/interfaces/ad.component';
import { AdItem } from '../ad-item';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss'],
})
export class AdBannerComponent implements OnInit, AfterViewInit {
  interval: any;
  currentAdIndex = -1;
  @Input() ads: AdItem[];
  @ViewChild(AdHostDirective, { static: true }) adHost: AdHostDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }
  ngAfterViewInit() {
   // console.log(this.adHost);
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
  loadComponent() {
    this.currentAdIndex = this.getRandomInt(2000) % 4;
    const adItem = this.ads[this.currentAdIndex];
   // console.log(adItem);
    const compFactory = this.componentFactoryResolver.resolveComponentFactory(
      adItem.component
    );
    const containerRef = this.adHost.viewContainerRef;
    containerRef.clear();
    const compRef  = containerRef.createComponent<AdComponent>(compFactory);
    compRef.instance.data = adItem.data;
  }
  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
   //return 1;
  }
}

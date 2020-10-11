import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInputComponent } from './user-input/user-input.component';
import { PipeComponent } from './pipe/pipe.component';
import { HomeComponent } from './home/home.component';
import { TemplateCodeComponent } from './template-code/template-code.component';
import { FormsModule } from '@angular/forms';
import { CustomPipe } from './pipe/custom-pipe/custom-pipe.pipe';
import { DebouncePipe } from './pipe/custom-pipe/debounce.pipe';
import { TrackerPipe } from './pipe/custom-pipe/tracker.pipe';
import { FetchPipePipe } from './pipe/custom-pipe/fetch-pipe.pipe';
import { TutorialseComponent } from './tutorialse/tutorialse.component';
import { HttpClientModule } from '@angular/common/http';
import { PrintPipePipe } from './pipe/custom-pipe/print-pipe.pipe';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { SpyClassDirective } from './directives/spy-class.directive';
import { AfterViewComponent } from './life-cycle/after-view/after-view.component';
import { ChildViewComponent } from './life-cycle/after-view/child-view/child-view.component';
import { AdHostDirective } from './directives/ad-host.directive';
import { AdBannerComponent } from './components/ad-banner/ad-banner.component';
import { HeroJobAdComponent } from './components/hero-job-ad.component';
import { HeroProfileComponent } from './components/hero-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    PipeComponent,
    HomeComponent,
    TemplateCodeComponent,
    CustomPipe,
    DebouncePipe,
    TrackerPipe,
    FetchPipePipe,
    TutorialseComponent,
    PrintPipePipe,
    LifeCycleComponent,
    SpyClassDirective,
    AfterViewComponent,
    ChildViewComponent,
    AdHostDirective,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
 // entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }

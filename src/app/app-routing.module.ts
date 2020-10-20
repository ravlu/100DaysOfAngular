import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { PipeComponent } from './pipe/pipe.component';
import { TutorialseComponent } from './tutorialse/tutorialse.component';
import { UserInputComponent } from './user-input/user-input.component';

const routes: Routes = [
   { path: 'pipe', component: PipeComponent },
  { path: 'tutorials', component: TutorialseComponent },
  { path: 'user-input', component: UserInputComponent },
  { path: 'life-cycle/:name', component: LifeCycleComponent }
   ,
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
   { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProcessingPageComponent } from './components/processing-page/processing-page.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent, data: {animation: 'Landing'}},
  {path: 'document/:slug', component: LandingPageComponent, data: {animation: 'Landing'}},
  {path: 'result', component: ProcessingPageComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

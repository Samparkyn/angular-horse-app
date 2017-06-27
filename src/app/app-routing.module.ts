import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule }        from '@angular/platform-browser';

import { DashboardComponent }   from './dashboard.component';
import { HorsesComponent }      from './horses.component';
import { HorseDetailComponent }  from './horse-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HorseDetailComponent },
  { path: 'horses',     component: HorsesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes), BrowserModule ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

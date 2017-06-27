import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { HorseDetailComponent } from './horse-detail.component';
import { HorsesComponent }      from './horses.component';
import { DashboardComponent }   from './dashboard.component'
import { HorseService }         from './horse.service';

@NgModule({
  declarations: [
    AppComponent,
    HorseDetailComponent,
    HorsesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HorseService],
  bootstrap: [AppComponent]
})

export class AppModule { }

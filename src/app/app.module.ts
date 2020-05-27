import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouteComponent } from './component/route/route.component';
import { HotelComponent } from './component/hotel/hotel.component';

@NgModule({
  declarations: [
    RouteComponent,
    HotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [RouteComponent]
})
export class AppModule { }

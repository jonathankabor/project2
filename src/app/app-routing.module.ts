import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteComponent } from './component/route/route.component';
import { HotelComponent } from './component/hotel/hotel.component';


const routes: Routes = [

   {path:'home',component: RouteComponent},
   {path:'hotel', component: HotelComponent},

   { path: '', redirectTo: '/home', pathMatch: 'prefix' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

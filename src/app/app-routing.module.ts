import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HotelComponent } from './component/hotel/hotel.component';
import {VolComponent} from './component/vol/vol.component';


const routes: Routes = [

   {path: 'vol', component: VolComponent},
   {path: 'hotel', component: HotelComponent},
  {path: '', redirectTo: '/vol', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

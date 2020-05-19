import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouteComponent } from './component/route/route.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

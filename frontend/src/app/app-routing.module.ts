import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./component/accueil/accueil.component";
import { ReservMainComponent } from './component/reservation/reserv-main/reserv-main.component';

const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'reservation', component: ReservMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

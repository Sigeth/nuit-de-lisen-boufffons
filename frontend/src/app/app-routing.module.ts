import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./component/accueil/accueil.component";
import { ChambresComponent } from './component/chambres/chambres.component';
import { ReservMainComponent } from './component/reservation/reserv-main/reserv-main.component';
import { TourismeLocaleComponent } from './component/tourisme-locale/tourisme-locale.component';

const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'reservation', component: ReservMainComponent},
  {path: 'Chambres', component: ChambresComponent},
  {path: 'tourisme-locale', component: TourismeLocaleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

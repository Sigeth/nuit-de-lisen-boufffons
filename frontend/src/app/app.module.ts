import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { ReservMainComponent } from './component/reservation/reserv-main/reserv-main.component';
import { ReservDisposComponent } from './component/reservation/reserv-dispos/reserv-dispos.component';
import { ReservInfosClientsComponent } from './component/reservation/reserv-infos-clients/reserv-infos-clients.component';
import { ReservConfirmComponent } from './component/reservation/reserv-confirm/reserv-confirm.component';
import { ReservPaiementComponent } from './component/reservation/reserv-paiement/reserv-paiement.component';
import { ChambresComponent } from './component/chambres/chambres.component';
import { TourismeLocaleComponent } from './component/tourisme-locale/tourisme-locale.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    ReservMainComponent,
    ReservDisposComponent,
    ReservInfosClientsComponent,
    ReservConfirmComponent,
    ReservPaiementComponent,
    ChambresComponent,
    TourismeLocaleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

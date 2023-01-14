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
import {RoomRequestsService} from "./service/room-requests.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";

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
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ],
  providers: [
    RoomRequestsService,
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

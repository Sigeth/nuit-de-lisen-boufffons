import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  condition:boolean = false ;
  changeCondition():void{
    this.condition=!this.condition;
  }
}

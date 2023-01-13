import { Component } from '@angular/core';

@Component({
  selector: 'app-reserv-main',
  templateUrl: './reserv-main.component.html',
  styleUrls: ['./reserv-main.component.css']
})
export class ReservMainComponent {

  step: number = 0;

  test(nombre:number):boolean{
    return this.step==nombre;
  }

  change(nombre:number):void{
    console.log("test ?")
    this.step = nombre
    
  }

}

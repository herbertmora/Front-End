import { Component, OnInit } from '@angular/core';
import { Starship6Service } from '../servicios/starship6.service';

@Component({
  selector: 'app-starship6',
  templateUrl: './starship6.component.html',
  styleUrls: ['./starship6.component.scss']
})
export class Starship6Component implements OnInit {

  starship6: any;

  constructor(private Starship6Service: Starship6Service) {

   }

  ObtenerStarship6() {
    debugger;
    this.Starship6Service.GetStarship6().subscribe( resultado => {
       this.starship6 = resultado;
       console.log(JSON.stringify(resultado));
     },
       error => {
         console.log(JSON.stringify(error));
       });   
       
   }   

   ngOnInit() {
    debugger;
    this.ObtenerStarship6();
  }   


}
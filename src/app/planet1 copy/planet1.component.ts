import { Component, OnInit } from '@angular/core';
import { Planet1Service } from '../servicios/planet1.service';

@Component({
  selector: 'app-planet1',
  templateUrl: './planet1.component.html',
  styleUrls: ['./planet1.component.scss']
})
export class Planet1Component implements OnInit {

  planet1: any;

  constructor(private Planet1Service: Planet1Service) {

   }

  ObtenerPlanet1() {
    debugger;
    this.Planet1Service.GetPlanet1().subscribe( resultado => {
       this.planet1 = resultado;
       console.log(JSON.stringify(resultado));
     },
       error => {
         console.log(JSON.stringify(error));
       });   
   }   

   ngOnInit() {
    debugger;
    this.ObtenerPlanet1();
  } 


}
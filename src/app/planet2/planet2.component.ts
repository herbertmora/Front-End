import { Component, OnInit } from '@angular/core';
import { Planet2Service } from '../servicios/planet2.service';

@Component({
  selector: 'app-planet2',
  templateUrl: './planet2.component.html',
  styleUrls: ['./planet2.component.scss']
})
export class Planet2Component implements OnInit {

  planet2: any;

  constructor(private Planet2Service: Planet2Service) {

   }

  ObtenerPlanet2() {
    debugger;
    this.Planet2Service.GetPlanet2().subscribe( resultado => {
       this.planet2 = resultado;
       console.log(JSON.stringify(resultado));
     },
       error => {
         console.log(JSON.stringify(error));
       });   
   }   

   ngOnInit() {
    debugger;
    this.ObtenerPlanet2();
  } 


}
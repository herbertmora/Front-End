import { Component, OnInit } from '@angular/core';
import { PlanetService } from '../servicios/planet.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit {

  planet: any;

  constructor(private PlanetService: PlanetService) {

   }

  ObtenerPlanet() {
    debugger;
    this.PlanetService.GetPlanet().subscribe( resultado => {
       this.planet = resultado;
       console.log(JSON.stringify(resultado));
     },
       error => {
         console.log(JSON.stringify(error));
       });   
   }   

   ngOnInit() {
    debugger;
    this.ObtenerPlanet();
  } 


}
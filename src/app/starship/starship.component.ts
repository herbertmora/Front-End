import { Component, OnInit } from '@angular/core';
import { StarshipService } from '../servicios/starship.service';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarshipComponent implements OnInit {

  starship: any;

  constructor(private StarshipService: StarshipService) {

   }

  ObtenerStarship() {
    debugger;
    this.StarshipService.GetStarship().subscribe( resultado => {
       this.starship = resultado;
       console.log(JSON.stringify(resultado));
     },
       error => {
         console.log(JSON.stringify(error));
       });   
       
   }   

   ngOnInit() {
    debugger;
    this.ObtenerStarship();
  } 


}
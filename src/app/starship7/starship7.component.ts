import { Component, OnInit } from '@angular/core';
import { Starship7Service } from '../servicios/starship7.service';


@Component({
  selector: 'app-starship7',
  templateUrl: './starship7.component.html',
  styleUrls: ['./starship7.component.scss']
})
export class Starship7Component implements OnInit {

  starship7: any;

  constructor(private Starship7Service: Starship7Service) {

   }

  ObtenerStarship7() {
    debugger;
    this.Starship7Service.GetStarship7().subscribe( resultado => {
       this.starship7 = resultado;
       console.log(JSON.stringify(resultado));
     },
       error => {
         console.log(JSON.stringify(error));
       });   
       
   }   

   ngOnInit() {
    debugger;
    this.ObtenerStarship7();
  }   


}
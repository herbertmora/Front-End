import { Component, OnInit } from '@angular/core';
import { Starship1Service } from '../servicios/starship1.service';

@Component({
  selector: 'app-starship1',
  templateUrl: './starship1.component.html',
  styleUrls: ['./starship1.component.scss']
})
export class Starship1Component implements OnInit {

  starship1: any;

  constructor(private Starship1Service: Starship1Service) {

   }

  ObtenerStarship1() {
    debugger;
    this.Starship1Service.GetStarship1().subscribe( resultado => {
       this.starship1 = resultado;
       console.log(JSON.stringify(resultado));
     },
       error => {
         console.log(JSON.stringify(error));
       });   
       
   }   

   ngOnInit() {
    debugger;
    this.ObtenerStarship1();
  } 


}
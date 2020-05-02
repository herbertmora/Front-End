import { Component, OnInit } from '@angular/core';
import { Starship4Service } from '../servicios/starship4.service';

@Component({
  selector: 'app-starship4',
  templateUrl: './starship4.component.html',
  styleUrls: ['./starship4.component.scss']
})
export class Starship4Component implements OnInit {

  starship4: any;

  constructor(private Starship4Service: Starship4Service) {

   }

  ObtenerStarship4() {
    debugger;
    this.Starship4Service.GetStarship4().subscribe( resultado => {
       this.starship4 = resultado;
       console.log(JSON.stringify(resultado));
     },
       error => {
         console.log(JSON.stringify(error));
       });   
       
   }   

   ngOnInit() {
    debugger;
    this.ObtenerStarship4();
  } 


}
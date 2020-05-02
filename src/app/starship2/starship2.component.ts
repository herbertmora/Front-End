import { Component, OnInit } from '@angular/core';
import { Starship2Service } from '../servicios/starship2.service';

@Component({
  selector: 'app-starship2',
  templateUrl: './starship2.component.html',
  styleUrls: ['./starship2.component.scss']
})
export class Starship2Component implements OnInit {

  starship2: any;

  constructor(private Starship2Service: Starship2Service) {

   }

  ObtenerStarship2() {
    debugger;
    this.Starship2Service.GetStarship2().subscribe( resultado => {
       this.starship2 = resultado;
       console.log(JSON.stringify(resultado));
     },
       error => {
         console.log(JSON.stringify(error));
       });   
       
   }   

   ngOnInit() {
    debugger;
    this.ObtenerStarship2();
  } 


}

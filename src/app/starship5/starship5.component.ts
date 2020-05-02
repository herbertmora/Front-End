import { Component, OnInit } from '@angular/core';
import { Starship5Service } from '../servicios/starship5.service';

@Component({
  selector: 'app-starship5',
  templateUrl: './starship5.component.html',
  styleUrls: ['./starship5.component.scss']
})
export class Starship5Component implements OnInit {

  starship5: any;

  constructor(private Starship5Service: Starship5Service) {

   }

  ObtenerStarship5() {
    debugger;
    this.Starship5Service.GetStarship5().subscribe( resultado => {
       this.starship5 = resultado;
       console.log(JSON.stringify(resultado));
     },
       error => {
         console.log(JSON.stringify(error));
       });   
       
   }   

   ngOnInit() {
    debugger;
    this.ObtenerStarship5();
  } 


}
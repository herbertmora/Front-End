import { Component, OnInit } from '@angular/core';
import { Starship3Service } from '../servicios/starship3.service';

@Component({
  selector: 'app-starship3',
  templateUrl: './starship3.component.html',
  styleUrls: ['./starship3.component.scss']
})
export class Starship3Component implements OnInit {

  starship3: any;

  constructor(private Starship3Service: Starship3Service) {

   }

  ObtenerStarship3() {
    debugger;
    this.Starship3Service.GetStarship3().subscribe( resultado => {
       this.starship3 = resultado;
       console.log(JSON.stringify(resultado));
     },
       error => {
         console.log(JSON.stringify(error));
       });   
       
   }   

   ngOnInit() {
    debugger;
    this.ObtenerStarship3();
  } 


}
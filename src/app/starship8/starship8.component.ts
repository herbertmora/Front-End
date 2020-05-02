import { Component, OnInit } from '@angular/core';
import { Starship8Service } from '../servicios/starship8.service';


@Component({
  selector: 'app-starship8',
  templateUrl: './starship8.component.html',
  styleUrls: ['./starship8.component.scss']
})
export class Starship8Component implements OnInit {

  starship8: any;

  constructor(private Starship8Service: Starship8Service) {

   }

  ObtenerStarship8() {
    debugger;
    this.Starship8Service.GetStarship8().subscribe( resultado => {
       this.starship8 = resultado;
       console.log(JSON.stringify(resultado));
     },
       error => {
         console.log(JSON.stringify(error));
       });   
       
   }   

   ngOnInit() {
    debugger;
    this.ObtenerStarship8();
  }   


}
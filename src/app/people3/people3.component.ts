import { Component, OnInit } from '@angular/core';
import { People3Service } from '../servicios/people3.service';

@Component({
  selector: 'app-people3',
  templateUrl: './people3.component.html',
  styleUrls: ['./people3.component.scss']
})
export class People3Component implements OnInit {

  people3: any;

  constructor(private People3Service: People3Service) {

   }

  ObtenerPeople3() {
    debugger;
    this.People3Service.GetPeople3().subscribe( resultado => {
       this.people3 = resultado;
       console.log(JSON.stringify(resultado));
     },
       error => {
         console.log(JSON.stringify(error));
       });   
   }   

   ngOnInit() {
    debugger;
    this.ObtenerPeople3();
  } 


}
import { Component, OnInit } from '@angular/core';
import { People2Service } from '../servicios/people2.service';

@Component({
  selector: 'app-people2',
  templateUrl: './people2.component.html',
  styleUrls: ['./people2.component.scss']
})
export class People2Component implements OnInit {

  people2: any;

  constructor(private People2Service: People2Service) {

   }

  ObtenerPeople2() {
    debugger;
    this.People2Service.GetPeople2().subscribe( resultado => {
       this.people2 = resultado;
       console.log(JSON.stringify(resultado));
     },
       error => {
         console.log(JSON.stringify(error));
       });   
   }   

   ngOnInit() {
    debugger;
    this.ObtenerPeople2();
  } 


}
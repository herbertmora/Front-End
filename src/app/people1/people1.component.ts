import { Component, OnInit } from '@angular/core';
import { People1Service } from '../servicios/people1.service';

@Component({
  selector: 'app-people1',
  templateUrl: './people1.component.html',
  styleUrls: ['./people1.component.scss']
})

export class People1.Component implements OnInit {

  people1: any;

  constructor(private People1Service: People1Service) {

   }

  ObtenerPeople1() {
    debugger;
    this.People1Service.GetPeople1().subscribe( resultado => {
       this.people1 = resultado;
       console.log(JSON.stringify(resultado));
     },
       error => {
         console.log(JSON.stringify(error));
       });   
   }   

   ngOnInit() {
    debugger;
    this.ObtenerPeople1();
  } 


}
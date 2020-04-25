import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../servicios/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people: any;

  constructor(private PeopleService: PeopleService) {

   }

  ObtenerPeople() {
    debugger;
    this.PeopleService.GetPeople().subscribe( resultado => {
       this.people = resultado;
       console.log(JSON.stringify(resultado));
     },
       error => {
         console.log(JSON.stringify(error));
       });   
   }   

   ngOnInit() {
    debugger;
    this.ObtenerPeople();
  } 


}
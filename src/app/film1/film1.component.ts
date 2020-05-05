import { Component, OnInit } from '@angular/core';
import { Film1Service } from '../servicios/film1.service';

@Component({
  selector: 'app-film1',
  templateUrl: './film1.component.html',
  styleUrls: ['./film1.component.scss']
})
export class Film1Component implements OnInit {

  film1: any;

  constructor(private Film1Service: Film1Service) {

   }

  ObtenerFilm1() {
    debugger;
    this.Film1Service.GetFilm1().subscribe( resultado => {
       this.film1 = resultado;
       console.log(JSON.stringify(resultado));
     },
       error => {
         console.log(JSON.stringify(error));
       });
   }

   ngOnInit() {
    debugger;
    this.ObtenerFilm1();
  }


}

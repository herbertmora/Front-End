import { Component, OnInit } from '@angular/core';
import { FilmService } from '../servicios/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  film: any;

  constructor(private FilmService: FilmService) {

   }

  ObtenerFilm() {
    debugger;
    this.FilmService.GetFilm().subscribe( resultado => {
       this.film = resultado;
       console.log(JSON.stringify(resultado));
     },
       error => {
         console.log(JSON.stringify(error));
       });   
   }   

   ngOnInit() {
    debugger;
    this.ObtenerFilm();
  } 


}
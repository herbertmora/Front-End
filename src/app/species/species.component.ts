import { Component, OnInit } from '@angular/core';
import { SpeciesService } from '../servicios/species.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {

  species: any;

  constructor(private SpeciesService: SpeciesService) {

   }

  ObtenerSpecie() {
    debugger;
    this.SpeciesService.GetSpecies().subscribe( resultado => {
       this.species = resultado;
       console.log(JSON.stringify(resultado));
     },
       error => {
         console.log(JSON.stringify(error));
       });   
   }   

   ngOnInit() {
    debugger;
    this.ObtenerSpecie();
  } 


}
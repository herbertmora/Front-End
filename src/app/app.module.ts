import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {DataSWService} from './servicios/data-sw.service';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentsMainComponent } from './contentsMain/contentsmain.component';
import { BodyFilmsComponent } from './body-films/body-films.component';

import { FilmService} from './servicios/film.service';
import { FilmComponent} from './film/film.component';
import { PeopleService} from './servicios/people.service';
import { PeopleComponent} from './people/people.component';
import { PlanetService} from './servicios/planet.service';
import { PlanetComponent} from './planet/planet.component';
import { StarshipService} from './servicios/starship.service';
import { StarshipComponent} from './starship/starship.component';
import { VehicleService} from './servicios/vehicle.service';
import { VehicleComponent} from './vehicle/vehicle.component';
import { SpeciesService} from './servicios/species.service';
import { SpeciesComponent} from './species/species.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentsMainComponent,
    BodyFilmsComponent,
    FilmComponent,
    PeopleComponent,
    PlanetComponent,
    StarshipComponent,
    VehicleComponent,
    SpeciesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataSWService, FilmService, PeopleService, PlanetService, StarshipService, VehicleService, SpeciesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { Film1Service} from './servicios/film1.service';
import { PeopleService} from './servicios/people.service';
import { People1Service} from './servicios/people1.service';
import { People2Service} from './servicios/people2.service';
import { People3Service} from './servicios/people3.service';
import { PlanetService} from './servicios/planet.service';
import { StarshipService} from './servicios/starship.service';
import { Starship1Service} from './servicios/starship1.service';
import { Starship2Service} from './servicios/starship2.service';
import { Starship3Service} from './servicios/starship3.service';
import { Starship4Service} from './servicios/starship4.service';
import { Starship5Service} from './servicios/starship5.service';
import { Starship6Service} from './servicios/starship6.service';
import { Starship7Service} from './servicios/starship7.service';
import { Starship8Service} from './servicios/starship8.service';
import { VehicleService} from './servicios/vehicle.service';
import { Vehicle1Service} from './servicios/vehicle1.service';
import { SpeciesService} from './servicios/species.service';


import { Film1Component} from './film1/film1.component';
import { StarshipComponent} from './starship/starship.component';
import { Starship1Component} from './starship1/starship1.component';
import { PeopleComponent} from './people/people.component';
import { People1Component} from './people1/people1.component';
import { People2Component} from './people2/people2.component';
import { People3Component} from './people3/people3.component';
import { PlanetComponent} from './planet/planet.component';
import { Starship2Component} from './starship2/starship2.component';
import { Starship3Component} from './starship3/starship3.component';
import { Starship4Component} from './starship4/starship4.component';
import { Starship5Component} from './starship5/starship5.component';
import { Starship6Component} from './starship6/starship6.component';
import { Starship7Component} from './starship7/starship7.component';
import { Starship8Component} from './starship8/starship8.component';
import { VehicleComponent} from './vehicle/vehicle.component';
import { Vehicle1Component} from './vehicle1/vehicle1.component';
import { SpeciesComponent} from './species/species.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentsMainComponent,
    BodyFilmsComponent,
    FilmComponent,
    Film1Component,
    PeopleComponent,
    People1Component,
    People2Component,
    People3Component,
    PlanetComponent,
    StarshipComponent,
    Starship1Component,
    Starship2Component,
    Starship3Component,
    Starship4Component,
    Starship5Component,
    Starship6Component,
    Starship7Component,
    Starship8Component,
    VehicleComponent,
    Vehicle1Component,
    SpeciesComponent,
    FooterComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  // tslint:disable-next-line: max-line-length
  providers: [DataSWService, FilmService, Film1Service, PeopleService, People1Service, People2Service, People3Service, PlanetService, StarshipService, Starship1Service, Starship2Service, Starship3Service, Starship4Service, Starship5Service, Starship6Service, Starship7Service, Starship8Service, VehicleService, Vehicle1Service, SpeciesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

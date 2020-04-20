import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSWService {

  constructor(private http: HttpClient) { }
//Peoples
  getPeoples() {
    return this.http.get('https://swapi.py4e.com/api/people/');
  }

  getPeople(id: number) {
    return this.http.get('https://swapi.py4e.com/api/people/' + id);
  }

//Films
  getFilms() {
    return this.http.get('https://swapi.py4e.com/api/films/');
  }

  getFilm(id: number) {
    return this.http.get('https://swapi.py4e.com/api/films/' + id);
  }

//vehicles
  getvehicles(){
    return this.http.get('https://swapi.py4e.com/api/vehicles/');
  }

  getvehicle(id: number){
    return this.http.get('https://swapi.py4e.com/api/vehicles/' + id);
  }

}

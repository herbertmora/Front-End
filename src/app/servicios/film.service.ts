import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map, finalize } from 'rxjs/operators';


@Injectable()
export class FilmService {

  constructor(public httpClient: HttpClient) { }

  public GetFilm() {
    debugger;
  const url = 'https://swapi.py4e.com/api/films/4/';

  const options = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    )
  };
  return this.httpClient.get(url, options).pipe(map((response: Response) => {  return response;  }) );

  }

}

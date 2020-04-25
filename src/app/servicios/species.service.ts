import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map, finalize } from 'rxjs/operators';


@Injectable()
export class SpeciesService {

  constructor(public httpClient: HttpClient) { }

  public GetSpecies() {  
    debugger;
  const url = 'https://swapi.py4e.com/api/species/1/';

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
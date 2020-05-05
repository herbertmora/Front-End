import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map, finalize } from 'rxjs/operators';


@Injectable()
export class Starship4Service {

  constructor(public httpClient: HttpClient) { }

  public GetStarship4() {
    debugger;
    const url = 'https://swapi.py4e.com/api/starships/15/';


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


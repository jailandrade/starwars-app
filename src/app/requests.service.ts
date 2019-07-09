import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  api_url:string = 'https://swapi.co/api/';

  constructor(private http: HttpClient) { }

  getEndpoints() {
    return this.http.get(this.api_url);
  }

  getCharacter(name: string) {
    return this.http.get(this.api_url+'people/?search=' + name);
  }

  getCharacters() {
    return this.http.get(this.api_url+'people/')
  }

  getResidents() {
    return this.http.get(this.api_url+'planets/')
  }
}

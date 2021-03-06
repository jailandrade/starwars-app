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

  getCharacterByName(name: string) {
    return this.http.get(this.api_url+'people/?search=' + name);
  }

  getCharacterById(id: number) {
    return this.http.get(this.api_url+'people/' + id);
  }

  getResourceByUrl(url: string) {
    return this.http.get(url);
  }

  getCharacters(page: number) {
    return this.http.get(this.api_url+'people/'+'?page='+ page);
  }

  getResidents(page: number) {
    return this.http.get(this.api_url+'planets/'+'?page='+page);
  }
}

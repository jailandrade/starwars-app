import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.sass']
})
export class CharacterComponent implements OnInit {

  character = {};

  constructor(
    private route: ActivatedRoute,
    private requests: RequestsService
  ) {}

  ngOnInit() {


  }

  getPlanetByName(uri: string) {
    return this.requests.getResourceByUrl(uri);
  }

  getCharacterByName(event) {

    this.requests.getCharacterByName(event.target.value)
      .subscribe((res) => {
        console.log('character', res);
        if (res['count'] > 0) {
          this.character = res['results'][0];

          this.getPlanetByName(this.character['homeworld']).subscribe((p) => {
            this.character['planet'] = p['name'];
          })

        } else {
          this.character = {};
        }

        console.log(this.character)

      });
  }

  getCharacterByUrl(id: number) {

    this.requests.getCharacterById(id)
      .subscribe((res) => {
        if (res) {
          this.character = res;


        }
      });
  }

}

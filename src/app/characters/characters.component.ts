import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharactersComponent implements OnInit {

  characters = [];
  character = {};

  constructor(
    private requests: RequestsService
  ) {}

  ngOnInit() {
    this.getCharacters();
  }

  getCharacterByName(event) {

    console.log(event.target.value);

    this.requests.getCharacterByName(event.target.value)
      .subscribe((res) => {
        console.log('character', res);
        if (res['count'] > 0) {
          this.character = res['results'][0];
        } else {
          this.character = {};
        }

      });
  }

  getCharacters() {
    this.requests.getCharacters()
      .subscribe((res) => {
        this.characters = res['results'];
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharactersComponent implements OnInit {

  constructor(
    private requests: RequestsService
  ) {}

  ngOnInit() {
  }

  getCharacterByName(name: string) {

    this.requests.getCharacter(name)
      .subscribe((res) => {
        console.log('character', res);
      });
  }

  getCharacters() {
    this.requests.getCharacters()
      .subscribe((res) => {
        console.log(res);
      });
  }

}

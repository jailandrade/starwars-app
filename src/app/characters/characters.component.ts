import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharactersComponent implements OnInit {

  characters = [];
  character = {};

  constructor(
    private requests: RequestsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {


    this.route.queryParams.subscribe(params => {
      console.log(params)
      if (params.ordenar) {
        let query = params.ordenar;

        this.getCharacters(query);
      } else {
        this.getCharacters('');
      }
    })

  }

  getCharacterByName(event) {

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

  getCharacters(type: string) {
    this.requests.getCharacters()
      .subscribe((res) => {
         this.characters = res['results'].map((c) => {
          let character = {};

          character['nombre'] = c.name;
          character['altura'] = c.height;
          character['peso'] = c.mass;

          return character;
        })

        if (type != '' && type === 'nombre') {
          this.orderByName(type);
        } else if (type != '' && type !== 'nombre') {
          this.orderByNumber(type);
        }

      });
  }

  orderByName(type) {
    console.log('ordering by nombre');
    this.characters.sort(function (a, b) {
      if (a[type] > b[type]) {
        return 1;
      }
      if (a[type] < b[type]) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }

  orderByNumber(type) {
    console.log('ordering by ', type);
    this.characters.sort(function (a, b) {
      if (parseInt(a[type]) > parseInt(b[type])) {
        return 1;
      }
      if (parseInt(a[type]) < parseInt(b[type])) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharactersComponent implements OnInit {

  characters = [];
  character = {};
  page: number = 1;
  pagination: number;
  query = '';


  constructor(
    private requests: RequestsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      console.log(params)
      if (params.ordenar) {
        this.query = params.ordenar;

        this.getCharacters(this.query, this.page);
      } else {
        this.getCharacters('', this.page);
      }
    });

  }

  getPagination(type: string) {
    console.log('type ', type);

    if (type === 'back' && this.page !== 0) {
      this.page = this.page - 1;
    } else if (type === 'next' && this.page !== this.pagination) {
      this.page = this.page + 1;
    }

    console.log('print page ', this.page);
    this.getCharacters(this.query, this.page);

  }

  getPlanetByName(uri: string) {
    return this.requests.getResourceByUrl(uri);
  }

  getCharacters(type: string, page: number) {
    if (page === undefined || page === null) {
      page = 0
    }

    this.requests.getCharacters(page)
      .subscribe((res) => {
        this.pagination = Math.round(res['count']/10);
        console.log(this.pagination)
        this.characters = res['results'].map((c) => {

          if (c['mass'] === 'unknown') {
            c['mass'] = "0"
          }

          if (c['height'] === 'unknown') {
            c['height'] = "0"
          }
          this.getPlanetByName(c['homeworld']).subscribe((p) => {
            c['planet'] = p['name'];
          })

          return c;
        });

        console.log('characters ', this.characters);

        if (type != '' && type === 'nombre') {
          this.orderByName(type);
        } else if (type != '' && type !== 'nombre') {
          this.orderByNumber(type);
        }

      });
  }

  orderByName(type) {
    console.log('ordering by nombre');
    type = 'name';

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
    if (type === 'peso') {
      type = 'mass';
    }

    if (type === 'altura') {
      type = 'height';
    }

    this.characters.sort(function (a, b) {

      let valueA = parseFloat(a[type].replace(',', ''));
      let valueB = parseFloat(b[type].replace(',', ''));

      if (valueA > valueB) {
        return 1;
      }
      if (valueA < valueB) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }

}

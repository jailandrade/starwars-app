import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';


@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.sass']
})
export class ResidentsComponent implements OnInit {

  planets = [];
  page: number = 1;
  pagination: number;

  constructor(
    private requests: RequestsService
  ) {}

  ngOnInit() {
    this.getResidents(this.page);
  }

  getByName(uri: string) {
    return this.requests.getResourceByUrl(uri);
  }

  getPagination(type: string) {
    console.log('type ', type);

    if (type === 'back' && this.page !== 0) {
      this.page = this.page - 1;
    } else if (type === 'next' && this.page !== this.pagination) {
      this.page = this.page + 1;
    }

    console.log('print page ', this.page);
    this.getResidents(this.page);

  }


  getResidents(page: number) {
    this.requests.getResidents(page)
      .subscribe((res) => {
        this.planets = res['results'].map((p) => {
          this.pagination = Math.round(res['count']/10);
          let planet = {};

          planet['name'] = p.name;
          planet['residents'] = p.residents.map((r) => {
            let resident = {};
            resident['id'] = r.split('/')[r.split('/').length-2];
            resident['url'] = r;
            this.getByName(r).subscribe((p_) => {
              resident['name'] = p_['name'];
              resident['birth_year'] = p_['birth_year']
              resident['gender'] = p_['gender']
              resident['height'] = p_['height']
              resident['mass'] = p_['mass']
              resident['hair_color'] = p_['hair_color']
              resident['skin_color'] = p_['skin_color']
              resident['eye_color'] = p_['eye_color']
              resident['birth_year'] = p_['birth_year']
              resident['gender'] = p_['gender']
              resident['planet'] = p['name']
            });

            return resident;
          });


          return planet;
        })

      });
  }

}

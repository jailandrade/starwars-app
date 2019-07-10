import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';


@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.sass']
})
export class ResidentsComponent implements OnInit {

  planets = [];

  constructor(
    private requests: RequestsService
  ) {}

  ngOnInit() {
    this.getResidents();
  }


  getResidents() {
    this.requests.getResidents()
      .subscribe((res) => {
        this.planets = res['results'].map((p) => {
          let planet = {};

          planet['name'] = p.name;
          planet['residents'] = p.residents.map((r) => {
            return r.split('/')[r.split('/').length-2];
          });

          return planet;
        })

        console.log('planets', this.planets);
      });
  }

}

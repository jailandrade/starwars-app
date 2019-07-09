import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';


@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.sass']
})
export class ResidentsComponent implements OnInit {

  constructor(
    private requests: RequestsService
  ) {}

  ngOnInit() {
  }


  getResidents() {
    this.requests.getResidents()
      .subscribe((res) => {
        console.log(res);
      });
  }

}

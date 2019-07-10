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

   let id = this.route.snapshot.params.id;

   this.getCharacterByUrl(parseInt(id));

  }

  getCharacterByUrl(id: number) {

    this.requests.getCharacterById(id)
      .subscribe((res) => {
        if (res) {
          this.character = res;
          console.log(this.character)
        }
      });
  }

}

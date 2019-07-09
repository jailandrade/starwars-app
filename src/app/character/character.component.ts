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

   let url = this.route.snapshot.params.url;

   this.getCharacterByUrl(url)

  }

  getCharacterByUrl(url: string) {

    this.requests.getCharacterByUrl(url)
      .subscribe((res) => {
        if (res) {
          this.character = res;
          console.log(this.character)
        }
      });
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'starwars-app';

  constructor(
    private route: Router
  ) {}


  ngOnInit() {

  }

  goTo(param: string) {
    if (param === 'all') {
      this.route.navigate(['/personajes']);
    } else {
      this.route.navigate(['/personaje']);
    }

  }
}

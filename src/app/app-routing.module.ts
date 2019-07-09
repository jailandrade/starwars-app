import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { CharacterComponent } from './character/character.component';

import { ResidentsComponent } from './residents/residents.component';

const routes: Routes = [
  {path: '', component: CharactersComponent},
  {path: 'personajes', component: CharactersComponent},
  {path: 'residentes', component: ResidentsComponent},
  {path: 'personaje/:url', component: CharacterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

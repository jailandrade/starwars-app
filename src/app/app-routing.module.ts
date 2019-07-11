import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { CharacterComponent } from './character/character.component';
import { InfoComponent } from './info/info.component';
import { ResidentsComponent } from './residents/residents.component';

const routes: Routes = [
  {path: '', component: InfoComponent},
  {path: 'personajes', component: CharactersComponent},
  {path: 'personaje', component: CharacterComponent},
  {path: 'residentes', component: ResidentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

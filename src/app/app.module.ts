import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { ResidentsComponent } from './residents/residents.component';
import { MaterialModule } from './material-module';
import { CharacterComponent } from './character/character.component';


@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    ResidentsComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);

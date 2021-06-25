import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { DestaqueComponent } from './destaque/destaque/destaque.component';
import { ListasComponent } from './listas/listas.component';
import { ListGenresComponent } from './listas/list-genres/list-genres.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DestaqueComponent,
    ListasComponent,
    ListGenresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

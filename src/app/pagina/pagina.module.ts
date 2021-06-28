import { ListGenericComponent } from './listas/list-generic/list-generic.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { DestaqueComponent } from './destaque/destaque.component';
import { ListasComponent } from './listas/listas.component';
import { ListGenresComponent } from './listas/list-genres/list-genres.component';
import { PaginaComponent } from './pagina.component';



@NgModule({
  declarations: [
    NavbarComponent,
    DestaqueComponent,
    ListasComponent,
    ListGenresComponent,
    PaginaComponent,
    ListGenericComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginaComponent
  ]
})
export class PaginaModule { }

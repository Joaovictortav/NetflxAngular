import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../../crud/service.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {

  constructor(private service: ServiceService) {
    this.getGenres();
  }

  genres: any[] = [];

  pathOthersList: Array<any> = [
    {
      name: 'Originais da Netflix',
      path: 'discover/tv?with_network=123?language=pt-BR&api_key='
    },
    {
      name: 'Recomendados',
      path: 'trending/all/week?language=pt-BR&api_key='
    },
    {
      name: 'Em Alta',
      path: 'movie/top_rated?language=pt-BR&api_key='
    }

  ];

  ngOnInit(): void {
  }

  getGenres() {
    this.service.getGeners().subscribe(
      (data) => {
        this.genres = data.genres;
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/crud/service.service';

@Component({
  selector: 'app-destaque',
  templateUrl: './destaque.component.html',
  styleUrls: ['./destaque.component.css']
})
export class DestaqueComponent implements OnInit {
  [x: string]: any;

  constructor(private service: ServiceService) { }

  getListSelecionada: any = {};

  randon: number = 0;

  movieSelecionado: any = {};

  genres: string = '';

  dataMovie: any = {}

  arrayGenres: any[] = [];

  firstDate: Date = new Date();

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

  getList () {
    this.service.getOthersMovies(this.pathOthersList[0].path).subscribe(
      data => {
        this.getListSelecionada = data.results;
        this.movieRamdom();
      }
    );
  }

  movieRamdom() {
    this.randon = Math.floor(Math.random() * (this.getListSelecionada.length)) ;
    this.movieSelecionado = this.getListSelecionada[this.randon];
    this.getDataMovie(this.movieSelecionado.id, 'tv');
  }

  getDataMovie(id: string, tipo: string) {
    this.service.getDataMovieById(id, tipo).subscribe(
      data => {
        this.dataMovie = data;
        console.log(this.dataMovie);
        this.dataMovie.genres.forEach((element: { name: any; }) => {
          this.arrayGenres.push(element.name)
        });
        this.genres = this.arrayGenres.join(', ');
        console.log(this.genres)
        this.firstDate = new Date(this.dataMovie.first_air_date);
      }
    );
  }

  ngOnInit(): void {
    this.getList();
  }

}

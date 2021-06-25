import { ServiceService } from './../../crud/service.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-genres',
  templateUrl: './list-genres.component.html',
  styleUrls: ['./list-genres.component.css']
})
export class ListGenresComponent implements OnInit {

  @Input() genre: any;
  movies: any[] = [];

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.getListMoviesByGenre();
  }

  getListMoviesByGenre() {

    this.service.getListMovieByGenres(this.genre?.id).subscribe( data => {
      console.log(data);
      this.movies = data.results;
    });
}


}

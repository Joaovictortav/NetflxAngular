import { ServiceService } from './../../../crud/service.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-genres',
  templateUrl: './list-genres.component.html',
  styleUrls: ['./list-genres.component.css']
})
export class ListGenresComponent implements OnInit {

  @Input() genre: any;
  movies: any[] = [];

  sizeList: number = 0;
  windowWidth: number = window.innerWidth;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.getListMoviesByGenre();
  }

  moverLeft() {
    if ((this.movies.length * 150) - this.windowWidth > Math.abs(this.sizeList)) {
      this.sizeList -= 300;
      document.getElementById(this.genre?.name)!.style.marginLeft = `${this.sizeList}px`;
    }
  }

  moverRight() {
    if ( 0 != Math.abs(this.sizeList)) {
      this.sizeList += 300;
      document.getElementById(this.genre?.name)!.style.marginLeft = `${this.sizeList}px`;
    }
  }

  getListMoviesByGenre() {

    this.service.getListMovieByGenres(this.genre?.id).subscribe( data => {
      console.log(data);
      this.movies = data.results;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../crud/service.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {

  constructor(private service: ServiceService) {
    this.getGenres();
  }

  ngOnInit(): void {
  }

  genres: any[] = [];

  getGenres() {
    this.service.getGeners().subscribe(
      (data) => {
        this.genres = data.genres;
      }
    );
  }
}

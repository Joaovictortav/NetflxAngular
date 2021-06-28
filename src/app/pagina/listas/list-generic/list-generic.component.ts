import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/crud/service.service';

@Component({
  selector: 'app-list-generic',
  templateUrl: './list-generic.component.html',
  styleUrls: ['./list-generic.component.css']
})
export class ListGenericComponent implements OnInit {

  constructor(private service: ServiceService) { }

  @Input() pathObject: any = {};
  movies: any[] = [];

  ngOnInit() {
  }

  getNewMovies() {

      this.service.getOthersMovies(this.pathObject.path).subscribe(
        data => {
          this.movies = data.results;
        }
      );
  }

  ngOnChanges(): void {
    this.getNewMovies();
  }

}

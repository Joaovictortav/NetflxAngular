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

  sizeList: number = 0;
  windowWidth: number = window.innerWidth;

  ngOnInit() {
  }

  getNewMovies() {

      this.service.getOthersMovies(this.pathObject.path).subscribe(
        data => {
          this.movies = data.results;
        }
      );
  }

  moverLeft() {
    if ((this.movies.length * 150) - this.windowWidth > Math.abs(this.sizeList)) {
      this.sizeList -= 300;
      document.getElementById(this.pathObject.name)!.style.marginLeft = `${this.sizeList}px`;
    }
  }

  moverRight() {
    if ( 0 != Math.abs(this.sizeList)) {
      this.sizeList += 300;
      document.getElementById(this.pathObject.name)!.style.marginLeft = `${this.sizeList}px`;
    }
  }

  ngOnChanges(): void {
    this.getNewMovies();
  }

}

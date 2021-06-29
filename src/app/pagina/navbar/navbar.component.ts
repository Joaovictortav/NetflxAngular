import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  verticalOffset: number = 0;

  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any){
    console.log($event);
    this.verticalOffset = window.pageYOffset;
  }

  constructor(){}

  ngOnInit(): void {
  }

}

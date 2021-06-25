import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  listMoviesAll = [];

  API_KEY = 'f8f91197370cf523c0d15be466e1eec1';
  API_BASE = 'https://api.themoviedb.org/3/';

  getListMoviesByGeners = `${this.API_BASE}discover/movie?api_key=${this.API_KEY}&language=pt-BR&with_genres=`;

  getGeners(): Observable<any> {
    let params = new HttpParams();
    params = params.append('api_key', this.API_KEY);
    params = params.append('language', 'pt-BR');
    return this.http.get(`${this.API_BASE}genre/movie/list`, {params: params})
  }

  getListMovieByGenres(id: number): Observable<any> {
    return this.http.get(`${this.getListMoviesByGeners}${id}`);
  }
}
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { movies } from '../model/movies.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}
  private url: string = '';
  private apikey: string = '9a617796';
  searchMovies(title: string, type: string) {
    this.url = `http://www.omdbapi.com/?s=${encodeURI(title)}&{type}&apikey=${
      this.apikey
    }`;
    return this.http.get<movies>(this.url).pipe(map((res) => res['Search']));
  }

  getDetails(id: string) {
    return this.http.get<movies>(
      `http://www.omdbapi.com/?i=${id}&plot=full&apikey=${this.apikey}`
    );
  }
}

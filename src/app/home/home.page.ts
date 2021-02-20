import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from '../services/movies.service';
import { movies } from '../model/movies.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  results: Observable<movies>;
  term: string = '';
  type: string = '';

  constructor(private movService: MoviesService) {}

  ngOnInit() {}
  searcheChanged() {
    this.results = this.movService.searchMovies(this.term, this.type);
  }
}

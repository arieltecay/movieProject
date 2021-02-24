import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from '../services/movies.service';
import { movies } from '../model/movies.interface';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  results: Observable<movies>;
  term: string = '';
  type: string = '';

  constructor(
    private movService: MoviesService,
    private navCtrl: NavController,
    private storage: Storage
  ) {}

  ngOnInit() {}
  searcheChanged() {
    this.results = this.movService.searchMovies(this.term, this.type);
  }
  closeSesion() {
    this.storage.set('logeado', false);
    this.navCtrl.navigateRoot('/login');
  }
}

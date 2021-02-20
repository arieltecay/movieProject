import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  content: Object = null;
  constructor(
    private activateRoute: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit() {
    console.log(this.activateRoute.snapshot.paramMap);
    
    let id = this.activateRoute.snapshot.paramMap.get('id');
    this.movieService.getDetails(id).subscribe((res) => {
      this.content = res;
    });
  }
}

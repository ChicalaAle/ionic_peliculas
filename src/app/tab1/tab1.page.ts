import { Component, OnInit } from '@angular/core';
import { Movie } from '../interfaces/interfaces';
import { MovieService } from '../services/movie.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  recentMovies: Movie[] = [];
  public slideOpts = {
    slidesPerView: 1.5,
    freeMode: true,
    initialSlide: 0,
    speed: 250
  };
  constructor(private MovieService: MovieService) {}

  ngOnInit(): void {
    this.showFeatures();
  }
  showFeatures(){
    
    this.MovieService.getFeature().subscribe(
      resp => {

        console.log(resp);
        this.recentMovies = resp.results;

      }
    );

  }

}

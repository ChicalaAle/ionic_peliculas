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
  popularMovies: Movie[] = [];
  
  constructor(private MovieService: MovieService) {}

  ngOnInit(): void {
    this.showFeatures();
    this.showPopular(); 
  }
  
  showFeatures(){
    
    this.MovieService.getFeature().subscribe(
      resp => {

        // console.log(resp);
        this.recentMovies = resp.results;

      }
    );

  }

  showPopular(){
    this.MovieService.getPopular().subscribe(
      resp => {
        
        /*
          Llegan de manera asincrona, por eso guardar en una variable
          para posteriormente utilizarlo.
        */
        const arrTemp = [...this.popularMovies, ...resp.results];


        this.popularMovies = arrTemp;
      }
    )
  }

  loadMore(){
    this.showPopular();
  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreditsResponse, MovieDetail, ResponseMDB } from '../interfaces/interfaces';

const URL = environment.url;
const API_KEY = environment.apiKey;


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private popularPage = 0;

  constructor(private _http: HttpClient) {}


  private query<T>( query: string ){

    
    query = URL + query;
    query += `&api_key=${API_KEY}&language=es`;

    return this._http.get<T>(query);

  }

  getPopular(){

    this.popularPage++;

    const query = `/discover/movie?sort_by=popularity.desc&page=${this.popularPage}`;

    return this.query<ResponseMDB>(query);

  }

  getFeature(){

    const today     = new Date();
    const lastDay   = new Date( today.getFullYear(), today.getMonth() + 1, 0 ).getDate();
    const month     = today.getMonth() + 1;
    let monthString;

    if ( month < 10 ){
      monthString = '0'+month;
    } else {
      monthString = month;
    }

    const start = `${today.getFullYear()}-${monthString}-01`;
    const end   = `${today.getFullYear()}-${monthString}-${lastDay}`;

    return this.query<ResponseMDB>(`/discover/movie?primary_release_date.gte=${start}&primary_release_date.lte=${end}`);
  }


  getMovieDetail(id: string){
    return this.query<MovieDetail>(`/movie/${id}?a=1`);
  }

  getActors(id: string){
    return this.query<CreditsResponse>(`/movie/${id}/credits?a=1`);
  }


  searchMovie(movie: string){
    return this.query<ResponseMDB>(`/search/movie?query=${movie}`);
  }


}

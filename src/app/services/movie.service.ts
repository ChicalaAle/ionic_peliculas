import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseMDB } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _http: HttpClient) {}

  getFeature(){

    return this._http.get<ResponseMDB>('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2019-10-22&api_key=8c15dd8d2ab610c949fe410159744a4b&language=es');

  }

}

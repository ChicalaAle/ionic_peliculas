import { Injectable } from '@angular/core';
import { MovieDetail } from '../interfaces/interfaces';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  movies: MovieDetail[] = [];

  constructor(private _storage: Storage) { this._storage.create() }


  saveMovie( movie: MovieDetail ){

    let exists = false;
    let message = '';

    for( const mov of this.movies ){
      if( mov.id === movie.id ){
        exists = true;
        break;
      }
    }

    if( exists ){
      this.movies = this.movies.filter(mov => mov.id !== movie.id);
      message = 'Eliminado de favoritos';
    } else {
      message = 'Guardado con éxito!';
    }
    
    this.movies.push( movie );
    
    this._storage.set('peliculas', this.movies);

  }

}

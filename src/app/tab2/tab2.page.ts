import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../components/detail/detail.component';
import { Movie } from '../interfaces/interfaces';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public searchValue: string = '';
  public suggests: string[] = [
    'SpiderMan',
    'Venom',
    'El lobo de wall street'
  ];

  public searchedMovies: Movie[] = [];

  public searching: boolean = false;
  

  constructor(private MovieService: MovieService, private modalCtrl: ModalController) {}

  public search(event){

    this.searching = true;

    const movie = event.detail.value;

    if(movie === ''){
      this.searching = false;
      this.searchedMovies = [];
      return;
    }


    setTimeout(() => {
      this.MovieService.searchMovie(movie).subscribe(
        resp => {
          console.log(resp);
          this.searchedMovies = resp['results'];
          this.searching = false;
        }
      )
    }, 500);
    
  }


  async showMovieDetail(id: string){
    const modal = await this.modalCtrl.create({
      component: DetailComponent,
      componentProps: {id:id}
    });

    modal.present();
  }


}

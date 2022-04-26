import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cast, MovieDetail } from 'src/app/interfaces/interfaces';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  @Input() id: string;

  public movie: MovieDetail;
  public actors: Cast[] = [];

  public slideOptActors={
    slidesPerView: 2.3,
    freeMode: true,
    spaceBetween: -5
  }

  maxString = 150;

  constructor(
    private movieService: MovieService,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
    console.log('ID:', this.id);
  
    this.movieService.getMovieDetail(this.id)
    .subscribe(
      resp=>{
        console.log(resp);
        this.movie = resp;
      }
    );

    this.movieService.getActors(this.id)
    .subscribe(
      resp=>{
        console.log(resp)
        this.actors = resp.cast;
      }
    );
    
  
  }

  public back(){
    this.modalCtrl.dismiss();
  }

  

}

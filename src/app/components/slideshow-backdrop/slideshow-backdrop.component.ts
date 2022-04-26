import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie } from 'src/app/interfaces/interfaces';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  @Input() movies: Movie[] = [];

  public slideOpts = {
    slidesPerView: 1.5,
    freeMode: true,
    initialSlide: 0,
    speed: 250
  };

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {}

  async showMovieDetail(id: string){
    
    const modal = await this.modalCtrl.create({
      component: DetailComponent,
      componentProps: {id:id}
    });

    modal.present();

  }

}

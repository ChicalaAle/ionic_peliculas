import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie } from 'src/app/interfaces/interfaces';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-slideshow-double',
  templateUrl: './slideshow-double.component.html',
  styleUrls: ['./slideshow-double.component.scss'],
})
export class SlideshowDoubleComponent implements OnInit {

  @Input() movies: Movie[] = [];
  @Output() loadMore = new EventEmitter();

  public slideOpts = {
    slidesPerView: 2.5,
    freeMode: true,
    initialSlide: 0,
    speed: 250,
    spaceBetween: -10
  };
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onClick(){
    this.loadMore.emit();
  }

  async showMovieDetail(id: string){
    const modal = await this.modalCtrl.create({
      component: DetailComponent,
      componentProps: {id:id}
    });

    modal.present();
  }

}

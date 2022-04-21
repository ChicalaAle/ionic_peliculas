import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.imgPath;

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, size: string = 'w500'): unknown {
    
    https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

    if(!img) return './assets/no-image-banner.jpg';

    const imgUrl = `${URL}${size}${img}`;

    console.log(imgUrl);
    
    return imgUrl;
  }

}
import { Component } from '@angular/core';

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
  

  constructor() {}

  public search(event){
    console.log(event);
  }

}

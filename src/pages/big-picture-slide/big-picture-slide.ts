import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-big-picture-slide',
  templateUrl: 'big-picture-slide.html',
})
export class BigPictureSlidePage {

  public slideUrl: string;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    
  }

  ionViewDidLoad() {
    let slideNumber = this.getRandomInt(1, 3);
    this.slideUrl = 'https://storage.googleapis.com/kiba-fashion-api-bucket/image/banner/banner'+slideNumber+'.jpg';
  }
  
  public getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}

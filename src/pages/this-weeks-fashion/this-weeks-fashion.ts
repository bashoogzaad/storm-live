import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NarrowcastingProvider } from "../../providers/narrowcasting/narrowcasting";

@IonicPage()
@Component({
  selector: 'page-this-weeks-fashion',
  templateUrl: 'this-weeks-fashion.html',
})
export class ThisWeeksFashionPage {
    
  public outfits: any;
    
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public narrowcastingProvider: NarrowcastingProvider
  ) {
      
  }

  ionViewDidLoad() {
      this.narrowcastingProvider.getThisWeeksFashion().subscribe(r => {
          this.outfits = r;
      });
  }

}

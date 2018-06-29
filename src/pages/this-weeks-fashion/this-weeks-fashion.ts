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
  public currentDate;
  
  public offsets = [0, 4, 8];
    
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public narrowcastingProvider: NarrowcastingProvider
  ) {
      
  }

  ionViewDidLoad() {
      
      this.currentDate = new Date();
      
      let offset = this.offsets[Math.floor(Math.random()*this.offsets.length)];
      this.narrowcastingProvider.getThisWeeksFashion('MUSTHAVES', offset).subscribe((r: Array<any>) => {
          this.outfits = r.reverse();
      });
      
  }

}

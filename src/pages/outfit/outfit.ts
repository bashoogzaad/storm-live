import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NarrowcastingProvider } from "../../providers/narrowcasting/narrowcasting";

@IonicPage()
@Component({
  selector: 'page-outfit',
  templateUrl: 'outfit.html',
})
export class OutfitPage {

  outfit: any;
  products: any;
    
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public narrowcastingProvider: NarrowcastingProvider
  ) {
      
  }

  ionViewDidLoad() {
      this.narrowcastingProvider.getRandomOutfit().subscribe(r => {
          
          this.outfit = r;
          this.narrowcastingProvider.getProducts(r['id']).subscribe(products => {
              this.products = products;
          });
          
      });
  }
  
  public getSizes(product) {
      
      let lbl = '';
      let count = 0;
      for (let pv of product.product_variants) {
          
          if (pv['all_stocks'].some(st => st.stock_level > 0)) {
              
              if (count !== 0) {
                  lbl = lbl+', ';
              }
              lbl = lbl + pv.size.name;
              
              count++;
              
          }
          
      }
      
      return lbl;
      
  }

}

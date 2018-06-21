import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class NarrowcastingProvider {

  baseUrl = 'https://api.kiba-fashion.nl/v2/';
    
  constructor(public http: HttpClient) {
      
  }

  public getRandomOutfit() {
      return this.http.get(this.baseUrl+'narrowcasting/get_random_outfit');
  }
  
  public getProducts(outfitId: number) {
      return this.http.get(this.baseUrl+'webapp/product/get?outfit_id='+outfitId+'&get_size=1&get_product_variant=1&get_stock=1');
  }
  
  public getThisWeeksFashion() {
      return this.http.get(this.baseUrl+'narrowcasting/get_latest_outfits');
  }
  
}

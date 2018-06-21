import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Subscription } from "rxjs";
import { Observable } from "rxjs";
import { NavController, App } from "ionic-angular";

@Injectable()
export class TimerProvider {

  private seconds = 15;
    
  private slides: string[];
    
  private currentStep: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private timer = Observable.interval(10);
  private subscription: Subscription;
  
  private currentPage: string = undefined;
  
  constructor(
      protected app: App
  ) {
    
    this.slides = [
       'OutfitPage',
       'BigPictureSlidePage',
       'ThisWeeksFashionPage',
       'YtVideoPage'
    ];
      
  }
  
  public start() {
    
    this.subscription = this.timer.subscribe(ticks => {
      
      if (ticks <= 100*this.seconds) {
        this.currentStep.next(ticks/this.seconds);
      } else {
        this.reset();
      }
      
    });
    
  }
  
  private reset() {
      
    this.subscription.unsubscribe();
    
    let nav = this.app.getRootNav();
    if (this.currentPage) {
        
        let slidesToChoose = this.slides.filter((i, k) => i !== this.currentPage);
        let page = slidesToChoose[Math.floor(Math.random()*slidesToChoose.length)];
        nav.push(page, {}, {animate:false});
        this.currentPage = page;
        
    } else {
        
        let page = this.slides[Math.floor(Math.random()*this.slides.length)];
        nav.push(page, {}, {animate:false});
        this.currentPage = page;
        
    }
    
    this.seconds = 15;
    this.start();
    
  }
  
  public getCurrentStep() {
    return this.currentStep;
  }
  
  public setSeconds(num) {
      this.seconds = num;
      this.subscription.unsubscribe();
      this.start();
      
  }

}

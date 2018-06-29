import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Subscription } from "rxjs";
import { Observable } from "rxjs";
import { NavController, App } from "ionic-angular";

@Injectable()
export class TimerProvider {

  private seconds = 15;
    
  private slides: any[];
    
  private currentStep: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private subscription: Subscription;
  
  private currentPage: any = undefined;
  
  constructor(
      protected app: App
  ) {
    
    this.slides = [
       {
           name: 'OutfitPage',
           duration: 15,
       },
       {
           name: 'BigPictureSlidePage',
           duration: 15,
       },
       {
           name: 'ThisWeeksFashionPage',
           duration: 15,
       },
       {
           name: 'YtVideoPage',
           duration: 100,
       }
    ];
      
  }
  
  public start() {
    
    let interval = 100;
    let multiplier = 1000/interval;
    let timer = Observable.interval(interval);
    this.subscription = timer.subscribe(ticks => {
      
      if (ticks <= this.seconds*multiplier) {
        this.currentStep.next((ticks/(this.seconds*multiplier))*100);
      } else {
        this.reset();
      }
      
    });
    
  }
  
  private reset() {
      
    this.subscription.unsubscribe();
    
    let nav = this.app.getRootNav();
    if (this.currentPage) {
        
        let slidesToChoose = this.slides.filter((i, k) => i.name !== this.currentPage.name);
        let page = slidesToChoose[Math.floor(Math.random()*slidesToChoose.length)];
        nav.push(page.name, {}, { animate:false });
        this.currentPage = page;
        
    } else {
        
        let page = this.slides[Math.floor(Math.random()*this.slides.length)];
        nav.push(page.name, {}, { animate:false });
        this.currentPage = page;
        
    }
    
    this.seconds = this.currentPage.duration;
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

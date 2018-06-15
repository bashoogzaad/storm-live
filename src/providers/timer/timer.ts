import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { Subscription } from "rxjs";
import { Observable } from "rxjs";

@Injectable()
export class TimerProvider {

  private currentStep: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private timer = Observable.interval(10);
  private subscription: Subscription;
  
  constructor() {
    
  }
  
  public start() {
    
    this.subscription = this.timer.subscribe(ticks => {
      
      if (ticks <= 1000) {
        this.currentStep.next(ticks/10);
      } else {
        this.reset();
      }
      
    });
    
  }
  
  private reset() {
    this.subscription.unsubscribe();
    this.start();
  }
  
  public getCurrentStep() {
    return this.currentStep;
  }

}

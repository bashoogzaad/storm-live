import { TimerProvider } from "../../providers/timer/timer";
import { Input } from "@angular/core";
import { Component } from '@angular/core';

@Component({
  selector: 'common-footer',
  templateUrl: 'common-footer.html'
})
export class CommonFooterComponent {

  @Input()
  public text: string;
  public step: number;

  constructor(
    public timer: TimerProvider
  ) {
    this.timer.getCurrentStep().subscribe(r => {
      this.step = r;
    });
  }
  
}

import { TimerProvider } from "../providers/timer/timer";
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage:any = 'BigPictureSlidePage';

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    timer: TimerProvider
  ) {
    
      
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      
      timer.start();
      
    });
    
    
    
  }
}


import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TimerProvider } from '../providers/timer/timer';
import { NarrowcastingProvider } from '../providers/narrowcasting/narrowcasting';
import { HttpClientModule } from "@angular/common/http";
import { YoutubeProvider } from '../providers/youtube/youtube';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TimerProvider,
    NarrowcastingProvider,
    YoutubeProvider
  ]
})
export class AppModule {}

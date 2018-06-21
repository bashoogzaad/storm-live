import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YoutubeProvider } from "../../providers/youtube/youtube";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { TimerProvider } from "../../providers/timer/timer";

/**
 * Generated class for the YtVideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-yt-video',
  templateUrl: 'yt-video.html',
})
export class YtVideoPage {

  public trustedVideoUrl: SafeResourceUrl;
    
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public youtubeProvider: YoutubeProvider,
      private domSanitizer: DomSanitizer,
      public timer: TimerProvider
  ) {
      
  }

  ionViewDidLoad() {
    this.youtubeProvider.getYoutubeVideos().subscribe(r => {
        
        let items = r['items'];
        let randomItem = items[Math.floor(Math.random()*items.length)];
        console.log(randomItem);
        
        let videoId = randomItem.snippet.resourceId.videoId;
        let url = 'https://www.youtube.com/embed/'+videoId+'?autoplay=1&mute=0&showinfo=0&controls=0&iv_load_policy=3&rel=0';
        
        this.youtubeProvider.getVideoDuration(videoId).subscribe(details => {
            console.log(details);
            let duration = this.parseDuration(details['items'][0].contentDetails.duration);
            this.timer.setSeconds(duration);
            this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
        });
        
    })
  }
  
  public parseDuration(ytTime) {
      
      var match = ytTime.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

      match = match.slice(1).map(function(x) {
        if (x != null) {
            return x.replace(/\D/, '');
        }
      });

      var hours = (parseInt(match[0]) || 0);
      var minutes = (parseInt(match[1]) || 0);
      var seconds = (parseInt(match[2]) || 0);

      return hours * 3600 + minutes * 60 + seconds;
      
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YoutubeProvider } from "../../providers/youtube/youtube";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { TimerProvider } from "../../providers/timer/timer";

@IonicPage()
@Component({
  selector: 'page-yt-video',
  templateUrl: 'yt-video.html',
})
export class YtVideoPage {

  public trustedVideoUrl: SafeResourceUrl;
  public videoTitle;
    
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
        
        let videoId = randomItem.snippet.resourceId.videoId;
        let url = 'https://www.youtube.com/embed/'+videoId+'?autoplay=1&mute=1&showinfo=0&controls=0&iv_load_policy=3&rel=0';
        
        this.videoTitle = randomItem.snippet.title;
        
        this.youtubeProvider.getVideoDuration(videoId).subscribe(details => {
            let duration = this.parseDuration(details['items'][0].contentDetails.duration);
            this.timer.setSeconds(duration);
            this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(url);
        });
        
    });
    
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

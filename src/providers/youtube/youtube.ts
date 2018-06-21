import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class YoutubeProvider {

  public key = 'AIzaSyBnfAcUKe0fWk-XwcukkpArXFsfHoIcemU';
    
  constructor(public http: HttpClient) {
    console.log('Hello YoutubeProvider Provider');
  }
  
  public getYoutubeVideos() {
      return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=PLxA7YX4-NGaUUJIdTtDNm7VB1sI_mP2pL&key='+this.key);
  }
  
  public getVideoDuration(videoId) {
      return this.http.get('https://www.googleapis.com/youtube/v3/videos?id='+videoId+'&key='+this.key+'&part=snippet,contentDetails');
  }

}

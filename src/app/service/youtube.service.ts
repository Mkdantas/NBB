import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  public key:any = 'AIzaSyDOIhvp3QhRKvdyO6mV9jrj7maUUhTxr6Y';

  public apiUrl:any = 'https://www.googleapis.com/youtube/v3/playlistItems';

  public playlistId:any = '';

  constructor(public http: HttpClient) { }


  playlist(channel){
    return this.http.get('https://wwww.googleapis.com/youtube/v3/playlist?part=snippet&channelId='+ channel+"&key=" + this.key)
  }

  playlistPage(channel, pageToken){
    return this.http.get('https://wwww.googleapis.com/youtube/v3/playlist?part=snippet&channelId='+ channel + "&pageToken="+pageToken + "&key" + this.key)

  }

  playlistList(playlistId){
    return this.http.get('https://wwww.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId='+ 'FLpLxm4c0V53WkzQvVprrz6A' + "&key=" + this.key)

  }

  playlistListPage(playlistId, pageToken){
    return this.http.get('https://wwww.googleapis.com/youtube/v3/playlist?part=snippet&pageToken='+ pageToken + "&playlistId=" + playlistId + "&key=" + this.key)

  }

}

import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../service/youtube.service';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  providers: [ YoutubeService ],
})
export class Tab4Page implements OnInit {

  channel:any = '';
  datas:any;

  constructor(private youtube: YoutubeService) { 

    youtube.playlist(this.channel).subscribe((data) =>{
      this.datas = data;
      console.log(data)
      
    });

  }

  ngOnInit() {
  }

}

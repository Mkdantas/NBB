import { Component, OnInit } from '@angular/core';
import { APIService } from '../../service/api.service';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})

export class NewsComponent implements OnInit {

  public items:any = [];
  public img:any;

  constructor(public api:APIService) {

    this.api.get().subscribe((data) =>{
      console.log(data);
      this.getPosts();
    });

  }
  ngOnInit(){
    
  }

  
  getPosts(){
    this.api.get('wp/v2/posts?_embed').subscribe((data) =>{
      this.items = data;
    })
  }


}

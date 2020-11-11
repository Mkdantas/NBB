import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { APIService } from '../../service/api.service';


@Component({
  selector: 'app-new-games',
  templateUrl: './new-games.page.html',
  styleUrls: ['./new-games.page.scss'],
})
export class NewGamesPage implements OnInit {

  public events:any = [];

  constructor(public api:APIService, public navCtrl:NavController, private router: Router) { 

    this.api.get().subscribe((data) =>{
      console.log(data);
      this.getEvents();
      this.getTeste();
    });


  }

  ngOnInit() {
  }

  getEvents(){
    this.api.get('sportspress/v2/events').subscribe((data) =>{
      this.events = data;
    })
  }

  getTeste(){
    this.api.get('sportspress/v2/events').subscribe((events) =>{
      let x = events;

      console.log(x)
    })
  }


}

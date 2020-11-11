import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { APIService } from '../../service/api.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

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

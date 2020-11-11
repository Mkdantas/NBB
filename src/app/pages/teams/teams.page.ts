import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { APIService } from './../../service/api.service';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

  public teams:any = [];

  constructor(public api:APIService, public navCtrl:NavController, private router: Router) {
    this.api.get().subscribe((data) =>{
      console.log(data);
      this.getTeams();
    });

   }

  ngOnInit() {
  }

  getTeams(){
    this.api.get('sportspress/v2/teams').subscribe((data) =>{
      this.teams = data;
    })
  }

 

}

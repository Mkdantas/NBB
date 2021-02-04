import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';
import firebase from 'firebase';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  private teams:any

  constructor(private apiService: ApiService) {}

  async ngOnInit(){
   this.teams = await this.apiService.getTeams();
   console.log(this.teams);
  }
}

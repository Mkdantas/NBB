import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  private games:any

  constructor(private apiService: ApiService) {}

  async ngOnInit(){
   this.games = await this.apiService.getGames();
   console.log(this.games);
  }
}

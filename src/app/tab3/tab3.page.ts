import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  private ranking:any

  constructor(private apiService: ApiService) {}

  async ngOnInit(){
   this.ranking = await this.apiService.getRanking();
   console.log(this.ranking);
  }
}

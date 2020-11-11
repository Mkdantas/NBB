import { APIService } from '../../service/api.service';
import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  id:any;
  postView:any;

  constructor(private storage:Storage, private api:APIService) { }

  ngOnInit() {
    this.storage.get('id').then((id) => {
      console.log('ID' + this.id);
      this.getData(id);
    });
  }

  async getData(id){
    console.log(id);
    await this.api.getAPIDataByID(id).subscribe(res =>{
      this.postView = res;
      console.log(this.postView);
    }, err => {
      console.log(err);
    });
    }
    
  

}

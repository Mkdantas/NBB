import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { APIService } from './../service/api.service';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public items:any = [];
  private per_page:number = 5;
  private page:number = 1;

  constructor(
              public api:APIService, 
              public navCtrl:NavController, 
              private router: Router,
              private storage: Storage
              
              ) {

    this.api.get().subscribe((data) =>{
      console.log(data);
      this.getPosts();
    });

  }


  async postView (id:any){
    await this.storage.set('id', id);
    await this.router.navigate(['detail']);
  }


  getPosts(infiniteScroll = null){
    this.api.get('wp/v2/posts?_embed&per_page=' + this.per_page + '&page=' + this.page).subscribe((data) =>{
      this.items = this.items.concat(data);
      this.page++;

      

      if(infiniteScroll = null){
        infiniteScroll.complete();
      }
    })

    
  }
  
 

  openDetail(item){
   this.router.navigate(['/detail'])
   
  }
  
}

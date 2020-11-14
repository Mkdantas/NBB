import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";
import { APIService } from "../../service/api.service";

@Component({
  selector: "app-new-games",
  templateUrl: "./new-games.page.html",
  styleUrls: ["./new-games.page.scss"],
})
export class NewGamesPage implements OnInit {
  public events: any = [];

  constructor(
    public api: APIService,
    public navCtrl: NavController,
    private router: Router
  ) {
    this.api.get().subscribe((data) => {
      console.log(data);
      this.getEvents();
    });
  }

  ngOnInit() {}

  // getEvents(){
  //   this.api.get('sportspress/v2/events').subscribe((data) =>{
  //     this.events = data;
  //   })
  // }

  getEvents() {
    this.api.get("sportspress/v2/events").subscribe((events) => {
      let x = events;

      x.forEach((game) => {
        this.api
          .get(`sportspress/v2/teams/${game.teams[0]}`)
          .subscribe((team) => {
            console.log(team.featured_media);

            this.api
              .get(`wp/v2/media/${team.featured_media}`)
              .subscribe((teamPhoto) => {
                game.teamHome = teamPhoto.media_details.sizes.full.source_url;
              });
          });
        this.api
          .get(`sportspress/v2/teams/${game.teams[1]}`)
          .subscribe((team) => {
            console.log(team.featured_media);

            this.api
              .get(`wp/v2/media/${team.featured_media}`)
              .subscribe((teamPhoto) => {
                game.teamVisitor =
                  teamPhoto.media_details.sizes.full.source_url;
              });
          });
        this.events = x;
      });
      console.log(x);
    });
  }
}

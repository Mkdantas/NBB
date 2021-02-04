import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private db = firebase.firestore();
  private teams = [];
  private ranking = [];
  private games = [];

  constructor() {
    
  }
  

 async getTeams() {
  await this.db.collection('teams')
    .get()
    .then((querySnapshot: any) => {
      let data = []
      querySnapshot.forEach((team:any) =>{
        data.push(team.data());
      })
      this.teams = data;
    });
    return this.teams;    
}

async getGames() {
  await this.db.collection('games')
    .get()
    .then((querySnapshot: any) => {
      let data = []
      querySnapshot.forEach((game:any) =>{
        data.push(game.data());
      })
      this.games = data;
    });
    return this.games;    
}

async getRanking() {
  await this.db.collection('ranking')
    .get()
    .then((querySnapshot: any) => {
      let data = []
      querySnapshot.forEach((ranking:any) =>{
        data.push(ranking.data());
      })
      this.ranking = data;
    });
    return this.ranking;    
}
}

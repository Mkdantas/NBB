import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { NextGamesComponent } from './next-games.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [NextGamesComponent],
  exports: [NextGamesComponent],
})
export class NextGamesModule { }

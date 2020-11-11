import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { NewsModule } from '../components/news/news.module';
import { NextGamesModule } from './../components/next-games/next-games.module';


import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    NewsModule,
    NextGamesModule,
    
  
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}

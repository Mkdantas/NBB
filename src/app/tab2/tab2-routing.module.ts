import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  
  {
    path: '',
    component: Tab2Page,
    children: [
      {
        path: 'new-games',
        children: [
          {
            path: '',
            loadChildren: () => import('../../app/pages/new-games/new-games.module').then( m => m.NewGamesPageModule)
          }
        
        ]
      },
      {
        path: 'results',
        children: [
          {
            path: '',
            loadChildren: () => import('../../app/pages/results/results.module').then( m => m.ResultsPageModule)
          }
        
        ]
      },
      {
        path: '',
        redirectTo: 'new-games',
        pathMatch: 'full'
      }
    

      
    

    ]
  },
  {
    path: '',
    redirectTo: '/tabs/new-games',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}

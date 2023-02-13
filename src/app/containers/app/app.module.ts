import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CosHeaderModule } from 'cos-shared';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'auction',
        loadChildren: () => import('../../pages/auction/auction.module').then(m => m.LazyAuctionModule),
      },
    ],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),

    CosHeaderModule,
  ],
  declarations: [AppComponent],
})
export class LazyAppContainerModule {
}

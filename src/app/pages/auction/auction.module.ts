import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CosBuyerModule } from 'cos-buyer-auction';

import { PageAuctionComponent } from './auction.component';

const routes: Routes = [
  {
    path: '',
    component: PageAuctionComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),

    CosBuyerModule,
  ],
  declarations: [PageAuctionComponent],
})
export class LazyAuctionModule {
}

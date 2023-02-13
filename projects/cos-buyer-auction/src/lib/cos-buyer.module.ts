import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CosCommonModule } from 'cos-common';
import { CosLoadingModule } from 'cos-shared';

import { CosBuyerAuctionsComponent } from './components/auctions/auctions.component';
import { CosBuyerAuctionCardComponent } from './components/auction-card/auction-card.component';
import { CosBuyerAuctionCardCarouselComponent } from './components/carousel/carousel.component';
import { CosTransmissionPipe } from './pipes/transmission/transmission.pipe';
import { CosFuelTypePipe } from './pipes/fuel-type/fuel-type.pipe';
import { cosAuctionReducers } from './store/auctions.reducer';
import { CosAuctionEffects } from './store/auctions.effects';

const Declarations = [
  CosBuyerAuctionsComponent,
  CosBuyerAuctionCardComponent,
  CosBuyerAuctionCardCarouselComponent,
  CosTransmissionPipe,
  CosFuelTypePipe
];

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,

    StoreModule.forFeature('auction', cosAuctionReducers),
    EffectsModule.forFeature([CosAuctionEffects]),

    CosCommonModule,
    CosLoadingModule,
  ],
  declarations: Declarations,
  exports: Declarations,
})
export class CosBuyerModule {
}

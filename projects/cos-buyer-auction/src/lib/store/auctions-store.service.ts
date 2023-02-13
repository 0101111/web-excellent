import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AuctionApiParams } from '../models/interfaces/auction-api-params.model';
import { AuctionState } from '../models/interfaces/auction-state.model';
import { AuctionItem } from '../models/interfaces/auction.model';
import { loadAuction } from './auctions.actions';
import { selectAuctionPage, selectGroupedAuctionItems, selectTotalAuctionItems } from './auctions.selectors';

@Injectable({ providedIn: 'root' })
export class CosAuctionStoreService {

  constructor(private store$: Store<AuctionState>) {
  }

  loadAuction(payload: AuctionApiParams): void {
    this.store$.dispatch(loadAuction({ payload }));
  }

  getGroupedAuctionItems(): Observable<AuctionItem[][]> {
    return this.store$.pipe(select(selectGroupedAuctionItems));
  }

  getAuctionPage(): Observable<number> {
    return this.store$.pipe(select(selectAuctionPage));
  }

  getTotalAuctionItems(): Observable<number> {
    return this.store$.pipe(select(selectTotalAuctionItems));
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuctionItem } from '../../models/interfaces/auction.model';
import { CosAuctionStoreService } from '../../store/auctions-store.service';

@Injectable({ providedIn: 'root' })
export class CosBuyerAuctionsService {

  constructor(
    private router: Router,
    private auctionStoreService: CosAuctionStoreService,
  ) {
  }

  set queryParams(queryParams: Record<string, number | undefined>) {
    this.router.navigate([], { queryParams, queryParamsHandling: 'merge' });
  }

  loadAuction(page: number, limit: number): void {
    this.auctionStoreService.loadAuction({ page, limit });
  }

  getGroupedAuctionItems(): Observable<AuctionItem[][]> {
    return this.auctionStoreService.getGroupedAuctionItems();
  }

  getAuctionPage(): Observable<number> {
    return this.auctionStoreService.getAuctionPage();
  }

  getTotalAuctionItems(): Observable<number> {
    return this.auctionStoreService.getTotalAuctionItems();
  }
}

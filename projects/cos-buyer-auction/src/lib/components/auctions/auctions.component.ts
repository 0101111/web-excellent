import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { lastValueFrom, Observable, of, takeUntil } from 'rxjs';

import { RxUnsubscribe, UniLocalStorageService, UniWindowRefService } from 'cos-common';

import { AuctionItem } from '../../models/interfaces/auction.model';
import { Paginator } from '../../models/interfaces/paginator.model';
import { CosBuyerAuctionsService } from './auctions.service';
import { CosAuthService, User } from 'cos-auth';

@Component({
  selector: 'cos-buyer-auctions',
  templateUrl: './auctions.component.html',
})
export class CosBuyerAuctionsComponent extends RxUnsubscribe implements OnInit, AfterViewInit {

  auctionItems$: Observable<AuctionItem[][]>;
  page: number = 1;
  pageSize: number = 9;
  total: number = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(
    private windowRef: UniWindowRefService,
    private localStorageService: UniLocalStorageService,
    private authService: CosAuthService,
    private auctionsService: CosBuyerAuctionsService,
  ) {
    super();
    this.auctionItems$ = of([]);
  }

  ngOnInit(): void {
    this.handleInitialization();
    this.auctionsService.loadAuction(this.page, this.pageSize);
    this.auctionItems$ = this.auctionsService.getGroupedAuctionItems();

    this.auctionsService.getAuctionPage()
      .pipe(takeUntil(this.destroy$))
      .subscribe((page: number) => this.page = page);

    this.auctionsService.getTotalAuctionItems()
      .pipe(takeUntil(this.destroy$))
      .subscribe((total: number) => this.total = total);
  }

  ngAfterViewInit(): void {
    const user = this.localStorageService.getItem('user') as User;

    //@TODO May be there is better solution (SSE) than setInterval (I don't like intervals and timeouts)
    // setInterval(() => {
    //   this.auctionsService.loadAuction(this.page, this.pageSize);
    //   lastValueFrom(this.authService.checkToken(user.userId, user));
    // }, 300);
    this.handlePageChange();
  }

  private handleInitialization(): void {
    const params = new URLSearchParams(this.windowRef.queryParams);

    this.page = parseInt(params.get('page') ?? '1');
    this.auctionsService.queryParams = { 'page': this.page };
  }

  private handlePageChange(): void {
    this.paginator?.page
      .subscribe((paginator: Paginator) => {
        this.page = paginator.pageIndex + 1;
        this.auctionsService.queryParams = { 'page': this.page };
        this.pageSize = paginator.pageSize;

        this.auctionsService.loadAuction(this.page, this.pageSize);
      });
  }
}

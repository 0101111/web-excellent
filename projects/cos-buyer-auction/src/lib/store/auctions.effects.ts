import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { errorHandler, UniRestApiService } from 'cos-common';

import { Auction } from '../models/interfaces/auction.model';
import { PayloadData } from '../models/interfaces/payload-data.model';
import { AuctionApiParams } from '../models/interfaces/auction-api-params.model';
import { LOAD_AUCTION, setAuctionItems, setAuctionPage, setTotalAuctionItems } from './auctions.actions';

@Injectable({ providedIn: 'root' })
export class CosAuctionEffects {

  constructor(
    private action$: Actions,
    private apiService: UniRestApiService,
  ) {
  }

  loadAuction$ = createEffect(() =>
    this.action$.pipe(
      ofType(LOAD_AUCTION),
      map((data: PayloadData<AuctionApiParams>): AuctionApiParams => data.payload),
      switchMap((params: AuctionApiParams): Observable<Auction> => this.apiService.get('auctionsUrl', {
        request: {
          params: {
            filter: `{"limit": ${params.limit}, "offset": ${(params.page - 1) * params.limit}}`,
          },
        },
      })),
      errorHandler('LOAD_AUCTION'),
      switchMap((payload: Auction): Action[] => [
        setAuctionItems({ payload: payload.items }),
        setAuctionPage({ payload: payload.page }),
        setTotalAuctionItems({ payload: payload.total }),
      ]),
    ),
  );
}

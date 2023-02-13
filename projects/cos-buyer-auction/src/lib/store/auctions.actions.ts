import { createAction, props } from '@ngrx/store';

import { AuctionItem } from '../models/interfaces/auction.model';
import { AuctionApiParams } from '../models/interfaces/auction-api-params.model';

export const LOAD_AUCTION = '[Auction] Load';
export const SET_AUCTION_ITEMS = '[Auction] Set Items';
export const SET_AUCTION_PAGE = '[Auction] Set Page';
export const SET_TOTAL_AUCTION_ITEMS = '[Auction] Set Total Items';

export const loadAuction = createAction(LOAD_AUCTION, props<{ payload: AuctionApiParams }>());
export const setAuctionItems = createAction(SET_AUCTION_ITEMS, props<{ payload: AuctionItem[] }>());
export const setAuctionPage = createAction(SET_AUCTION_PAGE, props<{ payload: number }>());
export const setTotalAuctionItems = createAction(SET_TOTAL_AUCTION_ITEMS, props<{ payload: number }>());

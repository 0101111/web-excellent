import { ActionReducerMap, createReducer, on } from '@ngrx/store';

import { AuctionState } from '../models/interfaces/auction-state.model';
import { setAuctionItems, setAuctionPage, setTotalAuctionItems } from './auctions.actions';
import { cosAuctionItemsAdapter } from './auctions.adapters';

const auctionItemsReducer = createReducer(
  cosAuctionItemsAdapter.getInitialState(),
  on(setAuctionItems, (state, { payload }) => cosAuctionItemsAdapter.setMany(payload, { ids: [], entities: {} })),
);

const auctionPageReducer = createReducer(1, on(setAuctionPage, (state, { payload }): number => payload));

const totalAuctionItemsReducer = createReducer(0, on(setTotalAuctionItems, (state, { payload }): number => payload));

export const cosAuctionReducers: ActionReducerMap<AuctionState> = {
  items: auctionItemsReducer,
  page: auctionPageReducer,
  total: totalAuctionItemsReducer
};

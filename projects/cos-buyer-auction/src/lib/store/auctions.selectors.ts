import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { EntityState } from '@ngrx/entity/src/models';

import { isDefined } from 'cos-common';

import { AuctionState } from '../models/interfaces/auction-state.model';
import { AuctionItem } from '../models/interfaces/auction.model';
import { cosAuctionItemsAdapter } from './auctions.adapters';

const auctionState = createFeatureSelector('auction') as MemoizedSelector<AuctionState, AuctionState>;
const auctionItemsState = createSelector(auctionState, (state: AuctionState): EntityState<AuctionItem> => state.items);
const auctionPageState = createSelector(auctionState, (state: AuctionState): number => state.page);
const totalAuctionItemsState = createSelector(auctionState, (state: AuctionState): number => state.total);

export const selectAuctionPage = createSelector(auctionPageState, (state: number): number => state);
export const selectTotalAuctionItems = createSelector(totalAuctionItemsState, (state: number): number => state);
export const { selectAll: selectAuctionItems } = cosAuctionItemsAdapter.getSelectors(auctionItemsState);
export const selectGroupedAuctionItems = createSelector(
  selectAuctionItems,
  (items: AuctionItem[]): AuctionItem[][] => groupAuctionItems(items)
);

function groupAuctionItems(items: AuctionItem[]): AuctionItem[][] {
  return items.reduce((acc: AuctionItem[][], curr: AuctionItem, index: number): AuctionItem[][] => {
    const groupIndex = Math.floor(index / 3);

    if (!isDefined(acc[groupIndex])) {
      acc.push([]);
    }

    acc[groupIndex].push(curr);
    return acc;
  }, []);
}

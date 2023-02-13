import { EntityState } from '@ngrx/entity';

import { AuctionItem } from './auction.model';

export interface AuctionState {
  items: EntityState<AuctionItem>;
  page: number;
  total: number;
}

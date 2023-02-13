import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { AuctionItem } from '../models/interfaces/auction.model';

export const cosAuctionItemsAdapter: EntityAdapter<AuctionItem> = createEntityAdapter<AuctionItem>({
  selectId: (item: AuctionItem): number => item.id,
});

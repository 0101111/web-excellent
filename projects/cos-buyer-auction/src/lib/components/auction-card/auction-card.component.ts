import { Component, Input } from '@angular/core';

import { AuctionItem } from '../../models/interfaces/auction.model';

@Component({
  selector: 'cos-buyer-auction-card',
  templateUrl: './auction-card.component.html',
})
export class CosBuyerAuctionCardComponent {

  @Input()
  item: AuctionItem | undefined;
}

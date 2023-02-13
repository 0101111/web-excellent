import { Component, ElementRef, Input, OnInit } from '@angular/core';
// @ts-ignore
import { Carousel } from 'bootstrap/dist/js/bootstrap.esm';

import { VehicleImage } from '../../models/interfaces/vehicle.model';

@Component({
  selector: 'cos-buyer-auction-card-carousel',
  templateUrl: './carousel.component.html',
})
export class CosBuyerAuctionCardCarouselComponent implements OnInit {

  @Input()
  itemId: number | undefined;

  @Input()
  vehicleImages: VehicleImage[] = [];

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    const myCarousels = this.el.nativeElement.querySelectorAll('.carousel');
    myCarousels.forEach((myCarousel: Element) => new Carousel(myCarousel));
  }
}

import * as selector from './auctions.selectors';

describe('Auction Selectors', () => {
  it('should get current auction page', () => {
    expect(selector.selectAuctionPage.projector(2)).toBe(2);
  });

  it('should group auction items', () => {
    const item = {
      id: 32524,
      label: 'test',
      associatedVehicle: {
        id: 45343,
        ez: '05/03',
        fuelType: 1,
        mileageInKm: 43546,
        transmission: 0,
        vehicleImages: [{ perspective: 0, url: 'url' }],
      },
      currentHighestBidValue: 352,
      remainingTimeInSeconds: 3453452,
      amIHighestBidder: true,
    };

    expect(selector.selectGroupedAuctionItems.projector([item])).toEqual([[item]]);
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from '../../app-routing.module';
import { PageAuctionComponent } from './auction.component';

describe('PageAuctionComponent', () => {
  let component: PageAuctionComponent;
  let fixture: ComponentFixture<PageAuctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}, { metaReducers: [] }),
        EffectsModule.forRoot([]),

        AppRoutingModule,
      ],
      providers: [{ provide: 'uniRoutesServiceModel', useValue: { prod: { urls: {} }, mock: { urls: {} } } }],
      declarations: [PageAuctionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have <cos-header>', () => {
    const element: HTMLElement = fixture.nativeElement;
    const el = element.querySelector('cos-header')!;
    expect(el).toBeTruthy();
  });

  it('should have <cos-buyer-auctions>', () => {
    const element: HTMLElement = fixture.nativeElement;
    const el = element.querySelector('cos-buyer-auctions')!;
    expect(el).toBeTruthy();
  });
});

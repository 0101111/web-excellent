import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from '../../app-routing.module';
import { PageNotFoundComponent } from './not-found.component';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}, { metaReducers: [] }),
        EffectsModule.forRoot([]),

        AppRoutingModule,
      ],
      providers: [{ provide: 'uniRoutesServiceModel', useValue: { prod: { urls: {} }, mock: { urls: {} } } }],
      declarations: [PageNotFoundComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have <mat-card>', () => {
    const element: HTMLElement = fixture.nativeElement;
    const el = element.querySelector('mat-card')!;
    expect(el).toBeTruthy();
  });
});

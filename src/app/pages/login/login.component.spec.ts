import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from '../../app-routing.module';
import { PageLoginComponent } from './login.component';

describe('PageLoginComponent', () => {
  let component: PageLoginComponent;
  let fixture: ComponentFixture<PageLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}, { metaReducers: [] }),
        EffectsModule.forRoot([]),

        AppRoutingModule,
      ],
      providers: [{ provide: 'uniRoutesServiceModel', useValue: { prod: { urls: {} }, mock: { urls: {} } } }],
      declarations: [PageLoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have <cos-login-form>', () => {
    const element: HTMLElement = fixture.nativeElement;
    const el = element.querySelector('cos-login-form')!;
    expect(el).toBeTruthy();
  });
});

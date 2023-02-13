import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRootComponent } from './root.component';
import { AppRoutingModule } from '../../app-routing.module';

describe('AppComponent', () => {
  let component: AppRootComponent;
  let fixture: ComponentFixture<AppRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}, { metaReducers: [] }),
        EffectsModule.forRoot([]),

        AppRoutingModule,
      ],
      providers: [{ provide: 'uniRoutesServiceModel', useValue: { prod: { urls: {} }, mock: { urls: {} } } }],
      declarations: [AppRootComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have <router-outlet>', () => {
    const element: HTMLElement = fixture.nativeElement;
    const el = element.querySelector('router-outlet')!;
    expect(el).toBeTruthy();
  });
});

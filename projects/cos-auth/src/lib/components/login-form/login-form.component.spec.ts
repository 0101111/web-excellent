import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UniFormModule } from 'uni-form-ng';
import { CosLoadingModule } from 'cos-shared';

import { CosLoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: CosLoginFormComponent;
  let fixture: ComponentFixture<CosLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatSnackBarModule,
        UniFormModule,

        CosLoadingModule,
      ],
      providers: [{ provide: 'uniRoutesServiceModel', useValue: { prod: { urls: {} }, mock: { urls: {} } } }],
      declarations: [CosLoginFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CosLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have <uni-form-ng>', () => {
    const element: HTMLElement = fixture.nativeElement;
    const el = element.querySelector('uni-form-ng')!;
    expect(el).toBeTruthy();
  });
});

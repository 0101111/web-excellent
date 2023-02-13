import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { UniFormModule } from 'uni-form-ng';

import { CosLoadingModule } from 'cos-shared';

import { CosLoginFormComponent } from './components/login-form/login-form.component';

const Declarations = [
  CosLoginFormComponent,
];

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    UniFormModule,

    CosLoadingModule
  ],
  declarations: Declarations,
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
  ],
  exports: Declarations,
})
export class CosAuthModule {
}

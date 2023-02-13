import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { UniLoadingComponent } from './loading.component';
import { UniLoadingInterceptor } from './loading.interceptor';

const Declarations = [
  UniLoadingComponent,
];

@NgModule({
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UniLoadingInterceptor, multi: true },
  ],
  declarations: Declarations,
  exports: Declarations,
})
export class CosLoadingModule {
}

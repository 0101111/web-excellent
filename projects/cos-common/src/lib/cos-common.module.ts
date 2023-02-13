import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { UniErrorHandlerInterceptor } from './interceptors/error-handler.interceptor';
import { CosNoImageDirective } from './directives/no-image.directive';
import { CosCountdownPipe } from './pipes/countdown.pipe';

const Declarations = [
  CosNoImageDirective,
  CosCountdownPipe,
];

@NgModule({
  imports:[
    MatSnackBarModule,
  ],
  declarations: Declarations,
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UniErrorHandlerInterceptor, multi: true },
  ],
  exports: Declarations
})
export class CosCommonModule {
}

import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CosAuthInterceptor } from 'cos-auth';
import { CosCommonModule } from 'cos-common';

import { AppRootComponent } from './containers/root/root.component';
import { AppRoutingModule } from './app-routing.module';
import { apiRoutes } from './api-routes';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    StoreModule.forRoot({}, { metaReducers: [] }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !localStorage.getItem('debug') }),

    CosCommonModule,
    AppRoutingModule,
  ],
  declarations: [AppRootComponent],
  providers: [
    { provide: 'uniRoutesServiceModel', useValue: apiRoutes },
    { provide: HTTP_INTERCEPTORS, useClass: CosAuthInterceptor, multi: true },
  ],
  bootstrap: [AppRootComponent]
})
export class AppModule { }

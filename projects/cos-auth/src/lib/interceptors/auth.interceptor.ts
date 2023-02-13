import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { from, lastValueFrom, Observable } from 'rxjs';

import { UniLocalStorageService } from 'cos-common';

import { User } from '../models/interfaces/user.model';

@Injectable()
export class CosAuthInterceptor implements HttpInterceptor {

  constructor(
    private localStorage: UniLocalStorageService
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return from(this.setHeaders(request, next));
  }

  private async setHeaders(request: HttpRequest<unknown>, next: HttpHandler): Promise<HttpEvent<unknown>> {
    const user = this.localStorage.getItem('user') as User | null;

    return await lastValueFrom(next.handle(request.clone({
      setHeaders: {
        authtoken:  user?.token || '',
        userid: user?.userId || ''
      },
    })));
  }
}

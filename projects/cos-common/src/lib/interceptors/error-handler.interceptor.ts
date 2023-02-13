import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { UniErrorHandlerService } from '../services/error-handler.service';

/**
 * Adds a default error handler to all requests.
 */
@Injectable({ providedIn: 'root' })
export class UniErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private errorHandler: UniErrorHandlerService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(catchError((error: HttpErrorResponse) => this.errorHandler.handleErrors(error)));
  }
}

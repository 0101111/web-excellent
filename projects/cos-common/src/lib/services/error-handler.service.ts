import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError, Observable } from 'rxjs';

import { UniLocalStorageService } from './local-storage.service';
import { UniNotificationService } from './notification.service';

@Injectable({ providedIn: 'root' })
export class UniErrorHandlerService {

  constructor(
    private router: Router,
    private notification: UniNotificationService,
    private localStorage: UniLocalStorageService,
  ) {
  }

  // @TODO refactor after receiving errors design
  handleErrors(error: HttpErrorResponse): Observable<HttpEvent<unknown | never>> {
    if (error instanceof HttpErrorResponse) {
      switch (error.status) {
        case 401:
          this.updateToken();
          this.notifyError(error, 'UNAUTHORIZED');
          break;
        case 403:
          this.updateToken();
          this.notifyError(error, 'FORBIDDEN');
          break;
        case 404:
          this.notifyError(error, 'REQUEST_NOT_FOUND');
          break;
        case 422:
          this.notifyError(error);
          break;
        case 500:
          this.notifyError(error, 'SOMETHING_WENT_WRONG');
          break;
        default:
          this.notifyError(error, 'SOMETHING_WENT_WRONG');
          break;
      }

      return throwError(() => new Error(error.message));
    } else {
      throw error;
    }
  }

  private updateToken() {
    // @TODO implement a refresh token at server-side
    this.localStorage.setItem('user', null);
    this.router.navigate(['login']);
  }

  private notifyError(error: HttpErrorResponse, errorKey: string = ''): void {
    const duration = 30000;

    if (error && error.error) {
      this.notification.notify(error.error.message, 'Close', { duration });
    } else if (error) {
      this.notification.notify(`${errorKey}: ${error.message}`, 'Close', { duration });
    }
  }
}

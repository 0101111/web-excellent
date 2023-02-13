import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UniLocalStorageService, UniNotificationService, UniRestApiService } from 'cos-common';

import { User } from '../../models/interfaces/user.model';
import { LoginPayload } from '../../models/interfaces/login-payload.model';
import { FormErrors } from '../../models/interfaces/form-errors.model';

@Injectable({ providedIn: 'root' })
export class CosLoginFormService {

  constructor(
    private router: Router,
    private notification: UniNotificationService,
    private apiService: UniRestApiService,
    private localStorage: UniLocalStorageService,
  ) {
  }

  showNotifications(fieldName: string, errors: Partial<FormErrors>): void {
    this.notification.notify(
      `${fieldName} ${this.getFormErrorMessage(errors)}`,
      'Close',
      { duration: 5000 },
    );
  }

  private getFormErrorMessage(errors: Partial<FormErrors>): string {
    return errors.required
      ? 'is required'
      : errors.pattern
        ? 'should match an email pattern'
        : errors.minlength
          ? 'should have more than 6 characters'
          : '';
  }

  login(payload: LoginPayload): void {
    const { email, password } = payload;

    this.apiService.put('loginUrl', { password, meta: '' }, { urlParameters: { email } })
      .subscribe((user: User): void => {
        if (user?.authenticated) {
          this.localStorage.setItem('user', user);
          this.router.navigate(['app']);
        } else {
          this.localStorage.setItem('user', null);
        }
      });
  }
}

import { Injectable } from '@angular/core';
import { CanMatch, Route, Router, UrlSegment } from '@angular/router';
import { lastValueFrom } from 'rxjs';

import { UniLocalStorageService, UniNotificationService } from 'cos-common';

import { UserRoleEnum } from '../models/enums/user-role.enum';
import { User } from '../models/interfaces/user.model';
import { CosAuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class CosAuthGuard implements CanMatch {

  constructor(
    private router: Router,
    private notification: UniNotificationService,
    private localStorageService: UniLocalStorageService,
    private authService: CosAuthService,
  ) {
  }

  async canMatch(route: Route, segments: UrlSegment[]): Promise<boolean> { // Observable<boolean>|Promise<boolean>|boolean
    const user = this.localStorageService.getItem('user') as User | null;

    if (user) {
      const checkedUser = await lastValueFrom(this.authService.checkToken(user.userId, user));
      const isBuyer = checkedUser.privileges.includes(<UserRoleEnum>'SALESMAN_USER');

      if (!checkedUser || !checkedUser.authenticated || !isBuyer) {
        this.router.navigate(['login']);

        if (!isBuyer) {
          this.notification.notify('Unfortunately, you do not have enough permissions', 'Close', { duration: 30000 });
        }
      } else if (segments.length === 1 && segments[0].path === 'app') {
        this.router.navigate(['app/auction']);
      }

      return user.authenticated;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}

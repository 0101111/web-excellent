import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UniLocalStorageService, UniRestApiService } from 'cos-common';

import { User } from '../models/interfaces/user.model';

@Injectable({ providedIn: 'root' })
export class CosAuthService {

  constructor(
    private router: Router,
    private apiService: UniRestApiService,
    private localStorageService: UniLocalStorageService,
  ) {
  }

  checkToken(email = '', user: User): Observable<User> {
    return this.apiService.post('loginUrl', user, { urlParameters: { email } });
  }

  logout(): void {
    this.localStorageService.setItem('user', null);
    this.router.navigate(['login']);
  }
}

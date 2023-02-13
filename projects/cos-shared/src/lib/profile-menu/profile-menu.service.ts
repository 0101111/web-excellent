import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UniLocalStorageService, UniRestApiService } from 'cos-common';

@Injectable({ providedIn: 'root' })
export class CosProfileMenuService {

  constructor(
    private router: Router,
    private apiService: UniRestApiService,
    private localStorageService: UniLocalStorageService,
  ) {
  }

  logout(): void {
    this.localStorageService.setItem('user', null);
    this.router.navigate(['login']);
  }
}

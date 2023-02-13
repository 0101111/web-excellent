import { Component } from '@angular/core';

import { CosProfileMenuService } from './profile-menu.service';

@Component({
  selector: 'cos-profile-menu',
  templateUrl: './profile-menu.component.html',
})
export class CosProfileMenuComponent {

  constructor(
    private profileMenuService: CosProfileMenuService
  ) {
  }

  logout() {
    this.profileMenuService.logout();
  }
}

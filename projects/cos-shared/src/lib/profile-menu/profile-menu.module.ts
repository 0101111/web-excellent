import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { CosProfileMenuComponent } from './profile-menu.component';

const Declarations = [
  CosProfileMenuComponent
];

@NgModule({
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: Declarations,
  exports: Declarations,
})
export class CosProfileMenuModule {
}

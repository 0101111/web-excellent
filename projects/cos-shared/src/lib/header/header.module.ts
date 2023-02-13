import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CosProfileMenuModule } from '../profile-menu/profile-menu.module';
import { CosHeaderComponent } from './header.component';

const Declarations = [
  CosHeaderComponent,
];

@NgModule({
  imports: [
    MatToolbarModule,

    CosProfileMenuModule
  ],
  declarations: Declarations,
  exports: Declarations,
})
export class CosHeaderModule {
}

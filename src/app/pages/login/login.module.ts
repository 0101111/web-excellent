import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CosAuthModule } from 'cos-auth';

import { PageLoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    component: PageLoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),

    CosAuthModule,
  ],
  declarations: [PageLoginComponent],
})
export class LazyLoginModule {
}

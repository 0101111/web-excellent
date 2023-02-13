import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { PageNotFoundComponent } from './not-found.component';

const routes: Routes = [
  {
    path: '',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule
  ],
  declarations: [PageNotFoundComponent],
})
export class LazyNotFoundModule {
}

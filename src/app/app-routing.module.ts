import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CosAuthGuard } from 'cos-auth';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/app',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LazyLoginModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./containers/app/app.module').then(m => m.LazyAppContainerModule),
    canMatch: [CosAuthGuard],
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.LazyNotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

import { Routes } from '@angular/router'

import { AuthGuard } from './core/guards/auth.guard'
import { HomeComponent } from './home/home.component'
import { CharityComponent } from './landing/charity/charity.component'


export const routes: Routes = [
  {
    path: 'home',
    component: CharityComponent,
  },
  // {
  //   path: '',
  //   component: LayoutComponent,
  //   loadChildren: () =>
  //     import('./landing/landing.route').then((mod) => mod.PAGE_ROUTES),
  // },
  // {
  //   path: '',
  //   component: AdminLayoutComponent,
  //   loadChildren: () =>
  //     import('./admin/admin.route').then((mod) => mod.ADMIN_ROUTES),
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: '',
  //   component: AuthLayoutComponent,
  //   loadChildren: () =>
  //     import('./account/auth/auth.route').then((mod) => mod.AUTH_ROUTES),
  // },
]

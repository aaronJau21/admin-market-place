import { Routes } from '@angular/router';
import { LoginPageComponent } from './presentation/shared/page/login-page/login-page.component';
import { AdminLayoutComponent } from './presentation/module/admin/layout/admin-layout/admin-layout.component';
import { SellerLayoutComponent } from './presentation/module/seller/layout/seller-layout/seller-layout.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'dashboard',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'admin',
        loadComponent: () =>
          import(
            './presentation/module/admin/page/home/admin-home-page.component'
          ),
      },
      {
        path: '',
        redirectTo: '/dashboard/admin',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'seller-dashboard',
    component: SellerLayoutComponent,
    children: [
      {
        path: 'seller',
        loadComponent: () =>
          import(
            './presentation/module/seller/page/home/seller-home-page.component'
          ),
      },
      {
        path: '',
        redirectTo: '/seller-dashboard/seller',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];

import { Routes } from '@angular/router';
import { LoginPageComponent } from './presentation/shared/page/login-page/login-page.component';
import { AdminLayoutComponent } from './presentation/module/admin/layout/admin-layout/admin-layout.component';
import { SellerLayoutComponent } from './presentation/module/seller/layout/seller-layout/seller-layout.component';
import { adminAuthGuard } from './lib/shared/auth/guard/admin-auth.guard';
import { sellerAuthGuard } from './lib/shared/auth/guard/seller-auth.guard';
import { unauthorizedGuard } from './lib/shared/auth/guard/unauthorized.guard';

export const routes: Routes = [
  {
    path: 'login',
    canActivate: [unauthorizedGuard],
    component: LoginPageComponent,
  },
  {
    path: 'dashboard',
    canActivate: [adminAuthGuard],
    component: AdminLayoutComponent,
    children: [
      {
        path: 'admin',
        loadComponent: () =>
          import(
            './presentation/module/admin/page/home/admin-home-page.component'
          ),
        title: 'Dashboard',
        data: {
          icon: 'fa-solid fa-house',
        },
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./presentation/module/admin/page/users/users-page.component'),
        title: 'Usuarios',
        data: {
          icon: 'fa-solid fa-user',
        },
      },
      {
        path: '',
        redirectTo: '/dashboard/admin',
        pathMatch: 'full',
      },
    ],
  },
  // Routes seller
  {
    path: 'seller-dashboard',
    canActivate: [sellerAuthGuard],
    component: SellerLayoutComponent,
    children: [
      {
        path: 'seller',
        loadComponent: () =>
          import(
            './presentation/module/seller/page/home/seller-home-page.component'
          ),
        title: 'Dashboard',
        data: {
          icon: 'fa-solid fa-home',
        },
      },
      {
        path: '',
        redirectTo: '/seller-dashboard/seller',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'unauthorized',
    loadComponent: () =>
      import('./presentation/shared/page/unauthorized/unauthorized.component'),
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];

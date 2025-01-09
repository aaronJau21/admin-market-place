import { Routes } from '@angular/router';
import { LoginComponent } from './application/shared/page/login/login.component';
import { DasboardComponent } from './application/layout/admin/dasboard.component';
import { authGuard, notAuthGuard } from './infraestructure';
import { RegisterComponent } from './application/shared/page/register/register.component';
import { authUserGuard } from './infraestructure/auth/guard/auth-user.guard';

export const routes: Routes = [
  {
    path: 'login',
    canActivate: [notAuthGuard],
    component: LoginComponent,
  },
  {
    path: 'register',
    canActivate: [notAuthGuard],
    component: RegisterComponent,
  },
  // Admin
  {
    path: 'dashboard',
    component: DasboardComponent,
    canActivate: [authGuard],
    loadChildren: () => import('./application/module/admin/admin.routes'),
  },
  // users
  {
    path: 'dashboard-user',
    canActivate: [authUserGuard],
    loadComponent: () =>
      import('./application/layout/user/user-dashboard.component'),
    loadChildren: () => import('./application/module/user/user.routes'),
  },
  // default
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
];

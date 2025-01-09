import { Routes } from '@angular/router';

export default [
  {
    path: 'home',
    loadComponent: () => import('./page/home/home.component'),
  },
  {
    path: 'profile',
    loadComponent: () => import('./page/profile/profile.component'),
  },
  {
    path: '',
    redirectTo: '/dashboard-user/home',
    pathMatch: 'full',
  },
] as Routes;

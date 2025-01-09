import { Routes } from '@angular/router';

export default [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component'),
  },
  {
    path: '',
    redirectTo: '/dashboard-user/home',
    pathMatch: 'full',
  },
] as Routes;

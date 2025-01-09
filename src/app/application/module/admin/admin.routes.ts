import { Routes } from '@angular/router';

export default [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component'),
  },
  {
    path: '',
    redirectTo: '/dashboard/home',
    pathMatch: 'full',
  },
] as Routes;

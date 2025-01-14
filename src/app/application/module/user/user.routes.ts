import { Routes } from '@angular/router';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';

export default [
  {
    path: 'home',
    loadComponent: () => import('./page/home/home.component'),
    title: 'Inicio',
    data: { icon: faHome },
  },
  {
    path: 'profile',
    loadComponent: () => import('./page/profile/profile.component'),
    title: 'Perfil',
    data: { icon: faUser },
  },
  {
    path: '',
    redirectTo: '/dashboard-user/home',
    pathMatch: 'full',
  },
] as Routes;

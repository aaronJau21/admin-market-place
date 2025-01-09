import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { IUser } from '../../../domain';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');
  const role: IUser = user ? JSON.parse(user) : null;

  if (token && user) {
    if (role.role !== 'admin') {
      router.navigateByUrl('/login');
      return false;
    }
    return true;
  }

  router.navigateByUrl('/login');
  return false;
};

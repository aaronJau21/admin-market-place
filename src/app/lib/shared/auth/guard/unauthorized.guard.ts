import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const unauthorizedGuard: CanActivateFn = (route, state) => {
  const userJson = localStorage.getItem('user');
  const router = inject(Router);
  if (userJson) {
    try {
      const user = JSON.parse(userJson);
      const role = user?.role;
      if (role === 'admin') {
        router.navigateByUrl('/dashboard/admin');
        return false;
      }
      if (role === 'seller') {
        router.navigateByUrl('/seller-dashboard/seller');
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }
  return true;
};

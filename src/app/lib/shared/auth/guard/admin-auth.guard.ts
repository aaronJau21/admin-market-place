import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminAuthGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  const userJson = localStorage.getItem('user');
  const router = inject(Router);

  if (!token || !userJson) {
    router.navigateByUrl('/login');
    return false;
  }

  try {
    const user = JSON.parse(userJson);
    const isAdmin = user?.role === 'admin';

    if (!isAdmin) {
      router.navigateByUrl('/unauthorized');
      return false;
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

import { inject, Injectable } from '@angular/core';
import { injectMutation } from '@tanstack/angular-query-experimental';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';

import { AuthService } from '../service/auth.service';
import { ILoginRequest, ILoginResponse } from '../../../domain';

@Injectable({
  providedIn: 'root',
})
export class AuthUseCase {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  private handleSuccess(data: ILoginResponse) {
    this.authService.saveData(data);
    switch (data.user.role) {
      case 'admin':
        this.router.navigateByUrl('/dashboard/home');
        break;
      case 'seller':
        this.router.navigateByUrl('/dashboard-user/home');
        break;
      default:
        this.router.navigateByUrl('/login');
        break;
    }
  }

  mutation = injectMutation(() => ({
    mutationFn: (request: ILoginRequest) =>
      lastValueFrom(this.authService.login(request)),
    onSuccess: (data) => this.handleSuccess(data),
    onError: console.log,
  }));

  mutationLogout = injectMutation(() => ({
    mutationFn: () => lastValueFrom(this.authService.logout()),
    onSuccess: () => {
      this.authService.deleteData();
      this.router.navigateByUrl('/login');
    },
    onError: console.log,
  }));
}

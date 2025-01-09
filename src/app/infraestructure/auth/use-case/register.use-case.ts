import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { injectMutation } from '@tanstack/angular-query-experimental';
import { lastValueFrom } from 'rxjs';

import { AuthService } from '../service/auth.service';
import { IRegisterRequest } from '../../../domain';

@Injectable({
  providedIn: 'root',
})
export class RegisterUseCase {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  mutation = injectMutation(() => ({
    mutationFn: (request: IRegisterRequest) =>
      lastValueFrom(this.authService.register(request)),
    onSuccess: console.log,
    onError: console.log,
  }));
}

import { inject, Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { injectMutation } from '@tanstack/angular-query-experimental';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterUseCase {
  private readonly authService = inject(AuthService);

  public registerMutation = injectMutation(() => ({
    mutationFn: (registerRequest: any) =>
      lastValueFrom(this.authService.register(registerRequest)),
    onSuccess: console.log,
    onError: console.log,
  }));
}

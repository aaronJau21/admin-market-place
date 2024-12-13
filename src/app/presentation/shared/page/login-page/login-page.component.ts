import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { UseCase } from '../../../../lib/shared/auth/use-case/use-case';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  private fb = inject(FormBuilder);
  private useCase = inject(UseCase);

  public loginForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  public onSubmit() {
    if (this.loginForm.valid) {
      const loginRequest = this.loginForm.value;
      this.useCase.loginMutation.mutate(loginRequest);
    }
  }
}

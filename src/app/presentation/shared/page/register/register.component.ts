import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RegisterUseCase } from '../../../../lib/shared/auth/use-case/register.use-case';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  private fb = inject(FormBuilder);
  private useCase = inject(RegisterUseCase);

  public registerForm: FormGroup = this.fb.group({
    full_name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  public onSubmit() {
    if (this.registerForm.valid) {
      const registerRequest = this.registerForm.value;
      this.useCase.registerMutation.mutate(registerRequest);
    }
  }
}

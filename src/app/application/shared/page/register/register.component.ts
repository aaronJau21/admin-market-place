import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RegisterUseCase } from '../../../../infraestructure';

@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  private readonly fb = inject(FormBuilder);
  private readonly registerUseCase = inject(RegisterUseCase);

  public registerForm: FormGroup = this.fb.group({
    full_name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  public registerSubmit = () => {
    const data = {
      full_name: this.registerForm.value.full_name as string,
      email: this.registerForm.value.email as string,
      password: this.registerForm.value.password as string,
    };
    return this.registerUseCase.mutation.mutate(data);
  };
}

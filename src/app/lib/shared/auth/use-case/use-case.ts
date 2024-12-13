import { inject, Injectable } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { injectMutation } from '@tanstack/angular-query-experimental';
import { ILoginRequest } from '../../../../domain/interfaces/auth/ilogin-request';
import { lastValueFrom } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UseCase {
  private readonly adminService = inject(AdminService);
  private toastr = inject(ToastrService);
  private router = inject(Router);

  public loginMutation = injectMutation(() => ({
    mutationFn: (loginRequest: ILoginRequest) =>
      lastValueFrom(this.adminService.Login(loginRequest)),
    onSuccess: (data) => {
      if (data.user && data.user.role === 'admin') {
        this.adminService.saveLocalStorage(data);
        this.toastr.success('Login admin', 'Success');
        this.router.navigateByUrl('/dashboard/admin');
      } else {
        this.adminService.saveLocalStorage(data);
        this.toastr.success('Login user', 'Success');
        this.router.navigateByUrl('/seller-dashboard/seller');
      }
    },
    onError: (error) => {
      console.log(error);
      if ('status' in error) {
        if (error.status === 422) {
          this.toastr.error('El email no es valido', 'Error');
        } else if (error.status === 401) {
          this.toastr.error('Credenciales incorrectas', 'Error');
        } else {
          this.toastr.error('Error', 'Error');
        }
      } else {
        this.toastr.error('An unexpected error occurred', 'Error');
      }
    },
  }));
}

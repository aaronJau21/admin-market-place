import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { ILoginRequest } from '../../../../domain/interfaces/auth/ilogin-request';
import { Observable } from 'rxjs';
import { ILoginResponse } from '../../../../domain/interfaces/auth/ilogin-response';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private readonly http = inject(HttpClient);
  private readonly API_URL = environment.API_URL;

  public Login(loginRequest: ILoginRequest): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(
      `${this.API_URL}/auth/login`,
      loginRequest
    );
  }

  public saveLocalStorage(data: ILoginResponse) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
  }
}

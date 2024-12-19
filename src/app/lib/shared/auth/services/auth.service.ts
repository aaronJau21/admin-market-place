import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import {
  ILoginRequest,
  ILoginResponse,
  IRegisterRequest,
  IRegisterResponse,
} from '../../../../domain';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly API_URL = environment.API_URL;

  public Login(loginRequest: ILoginRequest): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(
      `${this.API_URL}/auth/login`,
      loginRequest
    );
  }

  public register(data: IRegisterRequest): Observable<IRegisterResponse> {
    return this.http.post<IRegisterResponse>(
      `${this.API_URL}/auth/register`,
      data
    );
  }

  public saveLocalStorage(data: ILoginResponse) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
  }
}

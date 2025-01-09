import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  ILoginRequest,
  ILoginResponse,
  IRegisterRequest,
  IRegisterResponse,
} from '../../../domain';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly api = environment.API_URL;
  private readonly http = inject(HttpClient);

  public login(request: ILoginRequest): Observable<ILoginResponse> {
    const url = `${this.api}/auth/login`;
    return this.http.post<ILoginResponse>(url, request);
  }

  public register(request: IRegisterRequest): Observable<IRegisterResponse> {
    const url = `${this.api}/auth/register`;
    return this.http.post<IRegisterResponse>(url, request);
  }

  public saveData(data: ILoginResponse) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
  }
}

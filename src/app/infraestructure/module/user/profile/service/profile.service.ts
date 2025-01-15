import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment.development';
import {
  IProfileSellerResponse,
  IUser,
  IUserProfileReponse,
} from '../../../../../domain';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private readonly http = inject(HttpClient);
  private readonly api = environment.API_URL;
  private readonly user = localStorage.getItem('user');
  private readonly token = localStorage.getItem('token');

  public getProfile(): Observable<IUserProfileReponse> {
    const user: IUser = JSON.parse(this.user!);
    const url = `${this.api}/users/${user.id}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.get<IUserProfileReponse>(url, { headers });
  }

  public getProfileSeller(): Observable<IProfileSellerResponse> {
    const user: IUser = JSON.parse(this.user!);
    const url = `${this.api}/users/seller/${user.id}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
      accept:'application/json'
    });
    return this.http.get<IProfileSellerResponse>(url, { headers });
  }
}

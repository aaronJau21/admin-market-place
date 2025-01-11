import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../../../environments/environment.development';
import { IUser, IUserProfileReponse } from '../../../../../domain';
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
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
    return this.http.get<IUserProfileReponse>(`${this.api}/users/${user.id}`, { headers });
  }
}

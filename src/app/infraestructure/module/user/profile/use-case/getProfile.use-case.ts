import { inject, Injectable, signal } from '@angular/core';
import { ProfileService } from '../service/profile.service';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { IUser } from '../../../../../domain';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetProfileUseCase {
  private readonly profileService = inject(ProfileService);
  private readonly user = signal<IUser>(
    JSON.parse(localStorage.getItem('user')!)
  );

  getProfile = injectQuery(() => ({
    queryKey: ['profile', this.user().id],
    queryFn: () => lastValueFrom(this.profileService.getProfile()),
  }));
}

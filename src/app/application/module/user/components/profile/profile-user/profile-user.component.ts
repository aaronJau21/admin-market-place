import { Component, inject, signal } from '@angular/core';
import { GetProfileUseCase } from '../../../../../../infraestructure';

@Component({
  selector: 'component-profile-user',
  imports: [],
  templateUrl: './profile-user.component.html',
  styleUrl: './profile-user.component.css',
})
export class ProfileUserComponent {
  public readonly getProfileUseCase = inject(GetProfileUseCase);
  public getProfileQuery = this.getProfileUseCase.getProfile;
}

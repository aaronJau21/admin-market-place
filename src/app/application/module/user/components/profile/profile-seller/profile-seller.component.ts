import { Component, inject } from '@angular/core';
import { GetProfileUseCase } from '../../../../../../infraestructure';

@Component({
  selector: 'component-profile-seller',
  imports: [],
  templateUrl: './profile-seller.component.html',
  styleUrl: './profile-seller.component.css',
})
export class ProfileSellerComponent {
  private readonly getProfileUseCase = inject(GetProfileUseCase);

  public getProfileSellerQuery = this.getProfileUseCase.getProfileSeller;
}

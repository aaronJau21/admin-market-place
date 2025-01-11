import { Component } from '@angular/core';
import { ProfileUserComponent } from '../../components/profile/profile-user/profile-user.component';
import { ProfileSellerComponent } from '../../components/profile/profile-seller/profile-seller.component';

@Component({
  selector: 'app-profile',
  imports: [ProfileUserComponent, ProfileSellerComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  host: {
    class: 'flex-1',
  },
})
export default class ProfileComponent {}

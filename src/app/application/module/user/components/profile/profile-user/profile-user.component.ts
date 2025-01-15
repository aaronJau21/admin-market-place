import { Component, inject, OnInit, effect } from '@angular/core';
import { GetProfileUseCase } from '../../../../../../infraestructure';
import { Router } from '@angular/router';

@Component({
  selector: 'component-profile-user',
  imports: [],
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css'],
})
export class ProfileUserComponent implements OnInit {
  private readonly getProfileUseCase = inject(GetProfileUseCase);
  private readonly router = inject(Router);

  public getProfileQuery = this.getProfileUseCase.getProfile;

  constructor() {
    effect(() => {
      this.checkForErrors();
    });
  }

  ngOnInit(): void {
    this.checkForErrors();
  }

  public checkForErrors() {
    const error = this.getProfileQuery.error();
    if (error) {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      this.router.navigate(['/auth/login']);
    }
  }
}

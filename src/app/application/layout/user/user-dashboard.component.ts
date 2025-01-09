import { Component } from '@angular/core';
import { SideBarComponent } from '../components/side-bar/side-bar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  imports: [RouterOutlet, SideBarComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css',
})
export default class UserDashboardComponent {}

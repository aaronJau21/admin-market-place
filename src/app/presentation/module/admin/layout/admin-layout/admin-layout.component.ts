import { Component } from '@angular/core';
import { SideBarComponent } from '../../../../shared/components/side-bar/side-bar.component';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "../../../../shared/components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-admin-layout',
  imports: [SideBarComponent, RouterOutlet, NavBarComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css',
})
export class AdminLayoutComponent {}

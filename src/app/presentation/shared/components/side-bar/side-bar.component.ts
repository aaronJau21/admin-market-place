import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, Routes } from '@angular/router';
import { routes } from '../../../../app.routes';

@Component({
  selector: 'shared-side-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  public router = signal<Routes>([]);
  public user = JSON.parse(localStorage.getItem('user') as string) ?? {};
  public role = this.user.role;
  public show = signal<boolean>(false);

  ngOnInit(): void {
    this.getRoutes();
  }

  public getRoutes() {
    if (this.role === 'admin') {
      this.router.set(
        routes[2].children?.filter((route) => route.title) as Routes
      );
    } else {
      this.router.set(
        routes[3].children?.filter((route) => route.title) as Routes
      );
    }
  }

  public clickShow() {
    this.show.set(!this.show());
  }
}

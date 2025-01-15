import { Component, OnInit, signal } from '@angular/core';
import { Route, RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import routes from '../../../module/user/user.routes';

@Component({
  selector: 'side-bar',
  imports: [RouterLink, RouterLinkActive, FontAwesomeModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
  host: {
    class: 'w-52',
  },
})
export class SideBarComponent implements OnInit {
  public routes = signal(routes);
  public routeItem = signal<Route[]>([]);

  ngOnInit(): void {
    this.getRouteItem();
  }

  private getRouteItem() {
    const data = this.routes().filter((route) => route.data);
    this.routeItem.set(data);
  }
}

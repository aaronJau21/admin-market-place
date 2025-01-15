import { Component, inject, OnInit, signal } from '@angular/core';
import { Route, RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import routes from '../../../module/user/user.routes';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { AuthUseCase } from '../../../../infraestructure';

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
  private readonly authUseCase = inject(AuthUseCase);
  public routes = signal(routes);
  public routeItem = signal<Route[]>([]);
  public faArrowRi = faArrowRight;

  ngOnInit(): void {
    this.getRouteItem();
  }

  private getRouteItem() {
    const data = this.routes().filter((route) => route.data);
    this.routeItem.set(data);
  }

  public logout() {
    console.log('logout')
    this.authUseCase.mutationLogout.mutate('');
  }
}

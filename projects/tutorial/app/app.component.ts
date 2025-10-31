import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { IonApp, IonContent } from '@ionic/angular/standalone';
import { NgxEgButton, NgxEgHeader, NgxEgMenu } from 'ngx-eg-app';
import { filter } from 'rxjs';

import { Route } from './shared/enum/route.enum';

@Component({
  selector: 'app-root',
  imports: [IonApp, RouterOutlet, NgxEgMenu, NgxEgHeader, IonContent, RouterModule, NgxEgButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public pageTitle: string = '';

  public links = [
    { name: Route.HOME, route: Route.HOME },
    { name: `${Route.BUTTON} / Links`, route: Route.BUTTON },
    { name: Route.HEADER, route: Route.HEADER },
    { name: Route.INPUT, route: Route.INPUT },
    { name: Route.CHECKBOX, route: Route.CHECKBOX },
    { name: Route.TOAST, route: Route.TOAST },
    { name: Route.SELECT, route: Route.SELECT },
    { name: Route.FORM, route: Route.FORM },
    { name: Route.UTILS, route: Route.UTILS },
    { name: Route.OPTINPUT, route: Route.OPTINPUT },
    { name: Route.MODAL, route: Route.MODAL }
  ];

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(_ => {
        let route = this.activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }
        this.pageTitle = 'Ngx Example App - ' + route.snapshot.data['title'];
      });
  }

  public navigate(link: { route: string, name: string }): void {
    this.router.navigate([link.route.toLowerCase()]);
  }
}

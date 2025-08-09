import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { IonApp, IonContent } from '@ionic/angular/standalone';
import { NgxEgHeader, NgxEgMenu } from 'ngx-eg-app';

import { Route } from './shared/enum/route.enum';

@Component({
  selector: 'app-root',
  imports: [IonApp, RouterOutlet, NgxEgMenu, NgxEgHeader, IonContent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public links = [
    { name: Route.HOME, route: Route.HOME },
    { name: Route.BUTTON, route: Route.BUTTON },
    { name: Route.HEADER, route: Route.HEADER },
    { name: Route.INPUT, route: Route.INPUT },
    { name: Route.CHECKBOX, route: Route.CHECKBOX },
    { name: Route.TOAST, route: Route.TOAST },
    { name: Route.SELECT, route: Route.SELECT },
    { name: Route.FORM, route: Route.FORM },
    { name: Route.UTILS, route: Route.UTILS },
    { name: Route.OPTINPUT, route: Route.OPTINPUT }
  ];
}

import { Routes } from '@angular/router';

import { Route } from './shared/enum/route.enum';

export const routes: Routes = [
  {
    path: '',
    redirectTo: `/${Route.HOME}`,
    pathMatch: 'full'
  },
  {
    loadComponent: () => import('./ui/home/home.component').then(c => c.HomeComponent),
    path: Route.HOME
  },
  {
    loadComponent: () => import('./ui/button/button.component').then(c => c.ButtonComponent),
    path: Route.BUTTON
  },
  {
    loadComponent: () => import('./ui/header/header.component').then(c => c.HeaderComponent),
    path: Route.HEADER
  },
  {
    loadComponent: () => import('./ui/input/input.component').then(c => c.InputComponent),
    path: Route.INPUT
  },
  {
    loadComponent: () => import('./ui/checkbox/checkbox.component').then(c => c.CheckboxComponent),
    path: Route.CHECKBOX
  },
  {
    loadComponent: () => import('./ui/toast/toast.component').then(c => c.ToastComponent),
    path: Route.TOAST
  },
  {
    loadComponent: () => import('./ui/select/select.component').then(c => c.SelectComponent),
    path: Route.SELECT
  },
  {
    loadComponent: () => import('./ui/form/form.component').then(c => c.FormComponent),
    path: Route.FORM
  },
  {
    loadComponent: () => import('./ui/opt/opt.component').then(c => c.OptComponent),
    path: Route.OPTINPUT
  },
  {
    loadComponent: () => import('./ui/utils/utils.component').then(c => c.UtilsComponent),
    path: Route.UTILS
  }
];

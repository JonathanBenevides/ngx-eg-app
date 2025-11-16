import { Routes } from '@angular/router';

import { Route } from './shared/enum/route.enum';

export const routes: Routes = [
  {
    path: '',
    redirectTo: `/${Route.HOME.toLowerCase()}`,
    pathMatch: 'full'
  },
  {
    loadComponent: () => import('./ui/home/home.component').then(c => c.HomeComponent),
    path: Route.HOME.toLowerCase(),
    data: {
      title: Route.HOME
    }
  },
  {
    loadComponent: () => import('./ui/button/button.component').then(c => c.ButtonComponent),
    path: Route.BUTTON.toLowerCase(),
    data: {
      title: `${Route.BUTTON} / Links`
    }
  },
  {
    loadComponent: () => import('./ui/header/header.component').then(c => c.HeaderComponent),
    path: Route.HEADER.toLowerCase(),
    data: {
      title: Route.HEADER
    }
  },
  {
    loadComponent: () => import('./ui/input/input.component').then(c => c.InputComponent),
    path: Route.INPUT.toLowerCase(),
    data: {
      title: Route.INPUT
    }
  },
  {
    loadComponent: () => import('./ui/checkbox/checkbox.component').then(c => c.CheckboxComponent),
    path: Route.CHECKBOX.toLowerCase(),
    data: {
      title: Route.CHECKBOX
    }
  },
  {
    loadComponent: () => import('./ui/toast/toast.component').then(c => c.ToastComponent),
    path: Route.TOAST.toLowerCase(),
    data: {
      title: Route.TOAST
    }
  },
  {
    loadComponent: () => import('./ui/select/select.component').then(c => c.SelectComponent),
    path: Route.SELECT.toLowerCase(),
    data: {
      title: Route.SELECT
    }
  },
  {
    loadComponent: () => import('./ui/form/form.component').then(c => c.FormComponent),
    path: Route.FORM.toLowerCase(),
    data: {
      title: `${Route.FORM} & Validators`
    }
  },
  {
    loadComponent: () => import('./ui/opt/opt.component').then(c => c.OptComponent),
    path: Route.OPTINPUT.toLowerCase(),
    data: {
      title: Route.OPTINPUT
    }
  },
  {
    loadComponent: () => import('./ui/utils/utils.component').then(c => c.UtilsComponent),
    path: Route.UTILS.toLowerCase(),
    data: {
      title: Route.UTILS
    }
  },
  {
    loadComponent: () => import('./ui/modal/modal.component').then(c => c.ModalComponent),
    path: Route.MODAL.toLowerCase(),
    data: {
      title: Route.MODAL
    }
  },
  {
    loadComponent: () => import('./ui/toggle/toggle.component').then(c => c.ToggleComponent),
    path: Route.TOGGLE.toLowerCase(),
    data: {
      title: Route.TOGGLE
    }
  }
];

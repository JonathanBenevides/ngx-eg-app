import { Routes } from '@angular/router';

import { EgButtonComponent } from './ui/eg-button/eg-button.component';
import { EgCheckboxComponent } from './ui/eg-checkbox/eg-checkbox.component';
import { EgFormComponent } from './ui/eg-form/eg-form.component';
import { EgHeaderComponent } from './ui/eg-header/eg-header.component';
import { EgInputComponent } from './ui/eg-input/eg-input.component';
import { EgSelectComponent } from './ui/eg-select/eg-select.component';
import { EgToastComponent } from './ui/eg-toast/eg-toast.component';
import { HomeComponent } from './ui/home/home.component';
import { PipeMaskComponent } from './ui/pipe-mask/pipe-mask.component';
import { TimerComponent } from './ui/timer/timer.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    component: HomeComponent,
    path: 'home'
  },
  {
    component: EgButtonComponent,
    path: 'button'
  },
  {
    component: EgHeaderComponent,
    path: 'header'
  },
  {
    component: EgInputComponent,
    path: 'input'
  },
  {
    component: EgCheckboxComponent,
    path: 'checkbox'
  },
  {
    component: EgToastComponent,
    path: 'toast'
  },
  {
    component: EgSelectComponent,
    path: 'select'
  },
  {
    component: EgFormComponent,
    path: 'form'
  },
  {
    component: TimerComponent,
    path: 'timer'
  },
  {
    component: PipeMaskComponent,
    path: 'pipe-mask'
  }
];

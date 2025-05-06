import { Routes } from '@angular/router';
import { HomeComponent } from './ui/home/home.component';
import { EgButtonComponent } from './ui/eg-button/eg-button.component';
import { EgInputComponent } from './ui/eg-input/eg-input.component';
import { EgHeaderComponent } from './ui/eg-header/eg-header.component';

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
    }
];

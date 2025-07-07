import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { IonApp, IonContent } from '@ionic/angular/standalone';
import { NgxEgHeader, NgxEgMenu } from 'ngx-eg-app';

@Component({
  selector: 'app-root',
  imports: [IonApp, RouterOutlet, NgxEgMenu, NgxEgHeader, IonContent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'  
})
export class AppComponent {
  links = [
    { name: 'home', route: '/'},
    { name: 'button', route: '/button'},
    { name: 'header', route: '/header'},
    { name: 'input', route: '/input'},
    { name: 'checkbox', route: '/checkbox'},
  ]
}

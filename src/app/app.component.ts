import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonApp
  
 } from '@ionic/angular/standalone';
import { HeaderComponent } from './shared/header/header.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';

@Component({
  selector: 'app-root',
  imports: [IonApp, RouterOutlet, HeaderComponent, SideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}

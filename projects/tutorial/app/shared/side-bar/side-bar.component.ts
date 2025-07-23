import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  imports: [RouterModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  routes = [
    { route: 'input', label: 'input'},
    { route: 'button', label: 'button'},
    { route: 'header', label: 'header'},
  ]
}

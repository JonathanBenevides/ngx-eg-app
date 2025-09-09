import { Component } from '@angular/core';

import { HeaderButtonAction, NgxEgHeader } from 'ngx-eg-app';

@Component({
  selector: 'app-header',
  imports: [NgxEgHeader],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  isLoading = true;
  actions: HeaderButtonAction[] = [
    {
      icon: 'notifications',
      click: () => this.action(),
      ariaLabel: 'string'
    },
    {
      icon: 'settings',
      click: () => this.action(),
      ariaLabel: 'string',
      role: 'button'
    }
  ];

  public action(): void {
    this.isLoading = !this.isLoading;
  }
}

import { Component } from '@angular/core';
import { HeaderButtonAction } from 'ngx-eg-app';

import { BACK_BUTTON_FILE } from './files/back-button.constant';
import { BUTTON_ACTIONS_FILE } from './files/button-action.constant';
import { DETAULT_FILE } from './files/default.constant';
import { INITIAL_PRESENTATION } from './files/initial-presentation.constant';
import { LOADING_FILE } from './files/loading.constant';
import { IMPORTS } from './header.module';

@Component({
  selector: 'app-header',
  imports: [IMPORTS],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  public isLoading = true;
  public actions: HeaderButtonAction[] = [
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

  public initialPresentation = INITIAL_PRESENTATION;
  public defaultFile = DETAULT_FILE;
  public lodingFile = LOADING_FILE;
  public backButtonFile = BACK_BUTTON_FILE;
  public buttonActionFile = BUTTON_ACTIONS_FILE;
  public showDefaultDoc: boolean = false;
  public showLoadingDoc: boolean = false;
  public showBackButtonDoc: boolean = false;
  public showButtonActionsDoc: boolean = false;

  public action(): void {
    this.isLoading = !this.isLoading;
  }
}

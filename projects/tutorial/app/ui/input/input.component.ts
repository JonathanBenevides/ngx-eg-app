import { Component } from '@angular/core';

import { INITIAL_PRESENTATION } from './initial-presentation.constant';
import { COMPONENTS } from './input.module';

@Component({
  selector: 'app-input',
  imports: [COMPONENTS],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  public initialPresentation = INITIAL_PRESENTATION;
}

import { Component } from '@angular/core';

import { IMPORTS } from './form.module';
import { INITIAL_PRESENTATION } from './initial-presentation.constant';

@Component({
  selector: 'app-form',
  imports: [IMPORTS],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  public initialPresentation = INITIAL_PRESENTATION;
}

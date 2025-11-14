import { Component } from '@angular/core';
import { COMPONENTS } from './input.module';
import { INITIAL_PRESENTATION } from './initial-presentation.constant';

@Component({
  selector: 'app-input',
  imports: [COMPONENTS],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  public initialPresentation = INITIAL_PRESENTATION;
}

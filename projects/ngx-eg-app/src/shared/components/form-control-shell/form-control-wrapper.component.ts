import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IonNote } from '@ionic/angular/standalone';

@Component({
  selector: 'form-control-wrapper',
  imports: [IonNote, NgClass],
  templateUrl: './form-control-wrapper.component.html',
  styleUrl: './form-control-wrapper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormControlWrapperComponent {

  @Input() public errorMessage: string | { [key: string]: string } = '';
  @Input() public showError = false;
  @Input() public class = '';
}

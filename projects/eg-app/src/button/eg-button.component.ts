import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { ButtonFill, ButtonShape, ButtonSize, ButtonType } from '../shared/type/eg-button.type';
import { EgButtonModule } from '../shared/module/eg-button.module';

@Component({
  imports: [EgButtonModule],
  selector: 'ngx-eg-button',
  templateUrl: './eg-button.component.html',
  styleUrl: './eg-button.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxEgButton {

  @Input() mode: 'ios' | 'md' = 'md';
  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() ariaLabel: string = '';
  @Input() expand: 'block' | '' = '';
  @Input() disabled: boolean = false;
  @Input() fill: ButtonFill = 'solid';
  @Input() type: ButtonType = 'button';
  @Input() size: ButtonSize = 'default';
  @Input() shape: ButtonShape = 'default';
  @Input() iconSide: 'left' | 'right' = 'left';

}

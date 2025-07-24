import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

import { IMPORTS } from '../../../shared/module/eg-button.module';
import { ButtonFill, ButtonShape, ButtonSize, ButtonType } from '../../../shared/type/eg-button.type';

@Component({
  imports: IMPORTS,
  selector: 'ngx-eg-button',
  templateUrl: './eg-button.component.html',
  styleUrl: './eg-button.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxEgButton {

  @Input() public id = '';
  @Input() public mode: 'ios' | 'md' = 'md';
  @Input() public icon: string = '';
  @Input() public label: string = '';
  @Input() public ariaLabel: string = '';
  @Input() public expand: 'block' | '' = '';
  @Input() public disabled: boolean = false;
  @Input() public fill: ButtonFill = 'solid';
  @Input() public type: ButtonType = 'button';
  @Input() public size: ButtonSize = 'default';
  @Input() public shape: ButtonShape = 'default';
  @Input() public iconSide: 'left' | 'right' = 'left';

}

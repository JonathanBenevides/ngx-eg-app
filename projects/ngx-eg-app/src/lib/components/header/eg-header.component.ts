import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { addIcons } from 'ionicons';

import { ICONS, IMPORTS } from '../../../shared/module/eg-header.module';
import { HeaderButtonAction } from '../../interfaces/eg-input.interface';

@Component({
  selector: 'ngx-eg-header',
  imports: IMPORTS,
  templateUrl: './eg-header.component.html',
  styleUrl: './eg-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxEgHeader {

  public _isLoading = false;

  @Input() public title = '';
  @Input() public menuAriaLabel = '';
  @Input() public hasBackButton = false;
  @Input() public hasMenuButton = false;
  @Input() public actions: HeaderButtonAction[] = [];
  @Input() public set isLoading(value: boolean) {
    this._isLoading = value;
  };

  public get isLoading(): boolean {
    return this._isLoading;
  }

  constructor() {
    addIcons(ICONS);
  }
}

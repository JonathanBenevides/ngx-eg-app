import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { addIcons } from 'ionicons';

import { HeaderButtonAction } from '../../interfaces/eg-input.interface';
import { ICONS, IMPORTS } from '../../../shared/module/eg-header.module';

@Component({
  selector: 'ngx-eg-header',
  imports: IMPORTS,
  templateUrl: './eg-header.component.html',
  styleUrl: './eg-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxEgHeader {

  public _isLoading = false;

  constructor() {
    addIcons(ICONS);
  }

  public get isLoading(): boolean { return this._isLoading }

  @Input() public title = '';
  @Input() public menuAriaLabel = '';
  @Input() public hasBackButton = false;
  @Input() public hasMenuButton = false;
  @Input() public actions: HeaderButtonAction[] = [];
  @Input() public set isLoading(value: boolean) {
    this._isLoading = value;
  };

}

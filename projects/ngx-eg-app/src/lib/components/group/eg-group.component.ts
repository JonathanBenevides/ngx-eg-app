import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { addIcons } from 'ionicons';

import { ICONS, IMPORTS } from '../../../shared/module/eg-group.module';

@Component({
  selector: 'ngx-eg-group',
  imports: IMPORTS,
  templateUrl: './eg-group.component.html',
  styleUrl: './eg-group.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxEgGroup {

  @Input() public id = '';
  @Input() public icon = '';
  @Input() public border = false;
  @Input({ required: true }) public label = '';

  constructor() {
    addIcons(ICONS);
  }
}

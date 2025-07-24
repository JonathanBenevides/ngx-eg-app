import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ButtonAction } from '../../../shared/interface/eg-input.interface';
import { EgHeaderModule } from '../../../shared/module/eg-header.module';

@Component({
  selector: 'ngx-eg-header',
  imports: [EgHeaderModule],
  templateUrl: './eg-header.component.html',
  styleUrl: './eg-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxEgHeader {

  @Input() public title = '';
  @Input() public isLoading = false;
  @Input() public menuAriaLabel = '';
  @Input() public hasBackButton = false;
  @Input() public hasMenuButton = false;
  @Input() public actions: ButtonAction[] = [];
}

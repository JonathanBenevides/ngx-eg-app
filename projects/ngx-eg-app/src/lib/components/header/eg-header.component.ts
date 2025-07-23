import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EgHeaderModule } from '../../../shared/module/eg-header.module';
import { ButtonAction } from '../../../shared/interface/eg-input.interface';

@Component({
  selector: 'ngx-eg-header',
  imports: [EgHeaderModule],
  templateUrl: './eg-header.component.html',
  styleUrl: './eg-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxEgHeader {

  @Input() title = '';
  @Input() isLoading = false;
  @Input() menuAriaLabel = '';
  @Input() hasBackButton = false;
  @Input() hasMenuButton = false;
  @Input() actions: ButtonAction[] = [];
}

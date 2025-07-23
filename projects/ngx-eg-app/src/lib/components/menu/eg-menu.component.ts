import { Component, Input } from '@angular/core';
import { EgMenuModule } from '../../../shared/module/base.module';

@Component({
  selector: 'ngx-eg-menu',
  imports: [EgMenuModule],
  templateUrl: './eg-menu.component.html',
  styleUrl: './eg-menu.component.scss'
})
export class NgxEgMenu {
  @Input() title = '';
}

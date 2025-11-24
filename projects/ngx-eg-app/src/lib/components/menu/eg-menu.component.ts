import { Component, Input } from '@angular/core';

import { IMPORTS } from '../../../shared/module/eg-menu.module';

@Component({
  selector: 'ngx-eg-menu',
  imports: IMPORTS,
  templateUrl: './eg-menu.component.html',
  styleUrl: './eg-menu.component.scss'
})
export class NgxEgMenu {
  @Input() public title = '';
}

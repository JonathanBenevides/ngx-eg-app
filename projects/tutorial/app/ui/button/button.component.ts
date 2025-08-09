import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgxEgButton } from 'ngx-eg-app';

@Component({
  selector: 'app-button',
  imports: [NgxEgButton],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {}

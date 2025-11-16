import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { EgControlValueAccessor } from '../../../shared/class/eg-control-value-accessor.class';
import { IMPORTS } from '../../../shared/module/eg-toggle.module';

@Component({
  selector: 'ngx-eg-toggle',
  imports: [IMPORTS],
  templateUrl: './eg-toggle.component.html',
  styleUrl: './eg-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxEgToggle extends EgControlValueAccessor {

  @Input() public override value = false;
  @Output() public change = new EventEmitter<boolean>();

  public handleChange({ detail: { checked } }: CustomEvent<Pick<any, 'checked'>> | any): void {
    this.change.emit(checked);
    this.value = checked;
    this.onChange(checked);
    this.onTouch();
  }
}

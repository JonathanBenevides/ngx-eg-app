import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { noop } from 'rxjs';
import { EgControlValueAccessor } from '../shared/class/eg-control-value-accessor.class';
import { IMPORTS } from '../shared/module/eg-checkbox.module';

@Component({
  selector: 'ngx-eg-checkbox',
  imports: IMPORTS,
  templateUrl: './eg-check-box.component.html',
  styleUrl: './eg-check-box.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxEgCheckBox extends EgControlValueAccessor {

  @Input() labelPlacement: 'start' | 'end' = 'end';
  
  public override value: boolean = false;

  public override onChange: (value: boolean) => void = noop;

  public override writeValue(value: boolean): void {
    this.value = value;
    this.cdr.markForCheck();
  }

  public handleChange({ detail: { checked } }: CustomEvent<Pick<any, 'checked'>>): void {
    this.value = checked;
    this.onChange(checked);
    this.onTouch();
  }
}

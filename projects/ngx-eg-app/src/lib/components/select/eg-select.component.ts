import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { noop } from 'rxjs';
import { IMPORTS } from '../../../shared/module/eg-select.module';
import { EgControlValueAccessor } from '../../../shared/class/eg-control-value-accessor.class';
import { SelectAppearance } from '../../../shared/type/eg-input.type';
import { Select } from '../../interfaces/eg-select.interface';

@Component({
  selector: 'ngx-eg-select',
  imports: IMPORTS,
  templateUrl: './eg-select.component.html',
  styleUrl: './eg-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxEgSelect extends EgControlValueAccessor {

  @Input() public placeholder = '';
  @Input() public ariaLabel = '';
  @Input() public appearance: SelectAppearance = "solid";
  @Input({ required: true }) public options: Select[] = [];

  public override value: string | number = '';

  public override onChange: (value: Select) => void = noop;

  public override writeValue(option: Select): void {
    this.value = option?.value;
    this.cdr.markForCheck();
  }

  public handleChange({ detail: { value } }: CustomEvent<Pick<Select, 'value'>>): void {
    const selectedOption = this.options.find(({ value: _value }) => _value === value)!;
    this.value = selectedOption.value;
    this.onChange(selectedOption);
    this.onTouch();
  }
}

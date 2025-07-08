import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl, ReactiveFormsModule } from '@angular/forms';
import { IonCheckbox, IonLabel } from '@ionic/angular/standalone';
import { noop } from 'rxjs';

@Component({
  selector: 'ngx-eg-checkbox',
  imports: [IonCheckbox, ReactiveFormsModule, IonLabel],
  templateUrl: './eg-check-box.component.html',
  styleUrl: './eg-check-box.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxEgCheckBox implements ControlValueAccessor {

  public _id = '';
  public value = false;
  public touched = false;
  public disabled = false;
  public required = false;

  @Input() labelPlacement: 'start' | 'end' = 'end';
  @Input({ required: true }) label: string = '';
  @Input() errorText: string = '';
  @Input() public set id(_id: string) {
    this._id = _id;
  }

  get id(): string {
    return `checkbox-${this._id || this.label.replaceAll(' ', '-')}`;
  }

  constructor(
    @Optional() @Self() private ngControl: NgControl,
    private readonly cdr: ChangeDetectorRef
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  public onTouch: () => void = noop;
  public onChange: (value: boolean) => void = noop;

  public writeValue(value: boolean): void {
    this.value = value;
    this.cdr.markForCheck();
  }

  public registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public handleChange(event: CustomEvent): void {
    const checked = event.detail.checked;
    this.value = checked;
    this.onChange(checked);
    this.onTouch();
  }
}

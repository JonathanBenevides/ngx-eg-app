import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, forwardRef, Host, inject, Injector, Input, Optional } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormsModule, NG_VALUE_ACCESSOR, NgControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { noop } from 'rxjs';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MatFormFieldModule, MatInputModule],
  selector: 'custom-eg-input',
  templateUrl: './eg-input.component.html',
  styleUrl: './eg-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomEgInput),
      multi: true,
    },
  ]
})
export class CustomEgInput implements ControlValueAccessor, AfterViewInit {

  @Input() public placeholder = '';
  @Input() public id = '';
  @Input() public label = '';
  @Input() public hint = '';
  @Input() public errorMessage = '';
  @Input('value') public _value = '';
  @Input() public required = false;

  public control!: AbstractControl<FormControl>;
  public error!: GenericStateMatcher;
  public disabled = false

  public get value() {
    return this._value;
  }

  public set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouch();
  }

  private readonly cdr = inject(ChangeDetectorRef);
  @Optional() @Host() private readonly injector = inject(Injector);

  public ngAfterViewInit(): void {
    this.control = this.injector.get(NgControl).control as AbstractControl<FormControl>;
    this.required = this.control.hasValidator(Validators.required);
    this.error = new GenericStateMatcher(this.control);
    this.cdr.detectChanges();
  }

  public onTouch: () => void = noop;
  public onChange: (value: string) => void = noop;

  public registerOnChange(fn: () => void) {
    this.onChange = fn;
  }

  public writeValue(value: string): void {
    this.value = value;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

  public onBlur(): void {
    this.onTouch();
  }
}

class GenericStateMatcher implements ErrorStateMatcher {

  private control: AbstractControl<FormControl>;

  constructor(public _control: AbstractControl<FormControl>) {
    this.control = _control;
  }

  public isErrorState(): boolean {
    return !this.control?.valid && (this.control?.dirty || this.control?.touched);
  }
}
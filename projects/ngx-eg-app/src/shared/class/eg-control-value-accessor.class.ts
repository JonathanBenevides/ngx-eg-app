import { ChangeDetectorRef, Directive, Input, OnInit, Optional, Self } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl, Validators } from '@angular/forms';
import { noop } from 'rxjs';

import { ZERO } from '../../lib/utils/magic-number';

@Directive()
export abstract class EgControlValueAccessor implements ControlValueAccessor, OnInit {

  @Input() public hint: string = '';
  @Input({ required: true }) public label: string = '';

  @Input() public set id(_id: string) {
    this._id = _id;
  }
  @Input() public set errorMessage(_errorMessage: string | { [key: string]: string }) {
    this._errorMessage = _errorMessage;
  }

  public _id = '';
  public value: any;
  public touched = false;
  public required = false;
  public disabled = false;
  public _errorMessage: string | { [key: string]: string } = '';

  public get control(): AbstractControl {
    return this.ngControl.control!;
  }

  public get hasErrors(): boolean {
    return !!this.ngControl?.errors;
  }

  public get isTouched(): boolean {
    return !!this.ngControl?.touched;
  }

  public get isDirty(): boolean {
    return !!this.ngControl?.dirty;
  }

  public get showError(): boolean {
    return this.hasErrors && (this.isTouched || this.isDirty);
  }

  public get errorMessage(): string {
    if (typeof this._errorMessage === 'string') {
      return this._errorMessage;
    }
    const key = Object.keys(this.control?.errors || [])[ZERO]?.toLowerCase();
    return this._errorMessage[key];
  }

  constructor(
    @Optional() @Self() protected ngControl: NgControl,
    protected readonly cdr: ChangeDetectorRef
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  public ngOnInit(): void {
    this.setRequiredInput();
  }

  public onTouch: () => void = noop;
  public onChange: (value: any) => void = noop;

  public writeValue(value: any): void {
    this.value = value;
    this.cdr.markForCheck();
  }

  public registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  protected setRequiredInput(): void {
    this.required = this.control?.hasValidator(Validators.required) as boolean;
  }
}

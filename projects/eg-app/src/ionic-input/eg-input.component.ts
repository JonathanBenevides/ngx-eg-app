import { CommonModule, NgClass } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, forwardRef, Host, Injector, Input, OnChanges, Optional, SimpleChanges, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonButton, IonIcon, IonInput } from '@ionic/angular/standalone';
import { noop } from 'rxjs';

import { addIcons } from 'ionicons';
import { eye, lockClosed, eyeOff, close } from 'ionicons/icons';

@Component({
  imports: [IonIcon, FormsModule, ReactiveFormsModule, IonInput, NgClass, IonButton, CommonModule],
  selector: 'eg-input',
  templateUrl: './eg-input.component.html',
  styleUrl: './eg-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EgInput),
      multi: true
    }
  ]
})
export class EgInput implements ControlValueAccessor, AfterViewInit, OnChanges {

  public disabled = false;
  public showButton = false;
  public control!: AbstractControl;
  @Input() public id = '';
  @Input() public required = false;
  @Input() public formControlName!: string;
  @Input() public label = '';
  @Input('value') public _value = '';
  @Input() public type = 'text';
  @Input() public placeholder = '';
  @Input() public labelPlacement: 'stacked' | 'floating' = 'floating';
  @Input() public fill: 'outline' | 'solid' = 'solid';
  @Input() public hint = '';
  @Input() public ableShowPasswordButton = false;
  @Input() public ableSearchPasswordButton = false;
  @Input() public ableCopyButton = false;
  @Input() public ableCleanButton = false;
  @Input() public startIcon = '';
  @Input() public endIcon = '';

  @ViewChild('ionInputConponent') ionInputConponent!: IonInput

  
  public get value() {
    return this._value;
  }

  public set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouch();
  }

  constructor(
    @Optional() @Host() private readonly injector: Injector,
    private readonly cdr: ChangeDetectorRef
  ) {
    addIcons({ eye, lockClosed, eyeOff, close });
  }

  public ngOnChanges(): void {
    this.showButton = this.ableShowPasswordButton || this.ableCleanButton || this.ableCopyButton || this.ableSearchPasswordButton;
    if (this.ableShowPasswordButton) {
      this.changePasswordBehavior();
    }
    if (this.ableCleanButton) {
      this.endIcon = 'close';
    }
  }

  public ngAfterViewInit(): void {
    this.control = this.injector.get(NgControl).control as AbstractControl<FormControl>;
    this.required = this.control.hasValidator(Validators.required);
    this.detectChanges();
  }

  public onChange(value: string) {
    this.detectChanges()
  };

  public onTouch: () => void = noop;

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public writeValue(value: string): void {
    this.value = value;
  }

  public detectChanges(): void {
    this.cdr.detectChanges();
  }

  public buttonClick(): void {
    if (this.ableShowPasswordButton) {
      this.changePasswordBehavior();
    }
    if (this.ableCleanButton) {
      this.cleanInput();
    }
  }

  private cleanInput(): void {
    this.control?.reset();
  }

  private changePasswordBehavior(): void {
    if (this.endIcon === 'eye') {
      this.endIcon = 'eye-off';
      this.type = 'text';
    } else {
      this.endIcon = 'eye';
      this.type = 'password';
    }
  }
}

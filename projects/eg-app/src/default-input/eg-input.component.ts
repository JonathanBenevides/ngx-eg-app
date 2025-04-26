import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, Optional, Output, Self, SimpleChanges, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormsModule, NgControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { first, fromEvent, noop, tap } from 'rxjs';
import { Subscription } from 'rxjs';
import { ErrorStateMatcher } from '@angular/material/core';
import { Clipboard } from '@angular/cdk/clipboard';

type Appearance = 'fill' | 'outline';
type InputType = 'text' | 'number' | 'password' | 'date' | 'datetime-local' | 'email' | 'time' | 'week' | 'tel' | 'url';

enum ButtonAction {
  togglePasswordAction = 'togglePasswordAction',
  searchAction = 'searchAction',
  copyAction = 'copyAction',
  clearAction = 'clearAction'
}

enum ButtonIcon {
  togglePasswordAction = 'visibility',
  searchAction = 'search',
  copyAction = 'content_copy',
  clearAction = 'close'
}

interface InputAction {
  icon: string,
  action: string,
  click?: Function,
  ariaLabel?: string,
}

enum UpdateMode {
  blur = 'blur',
  change = 'change',
  submit = 'submit'
}

@Component({
  imports: [
    NgClass,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  selector: 'default-eg-input',
  templateUrl: './eg-input.component.html',
  styleUrl: './eg-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultEgInput implements ControlValueAccessor, OnDestroy, OnChanges {

  @Input() public hint = '';
  @Input() public label = '';
  @Input() public iconSuffix = '';
  @Input() public placeholder = '';
  @Input() public type: InputType = 'text';
  @Input() public appearance: Appearance = "fill";
  @Input() public buttonAction: ButtonAction[] | string[] = [];
  @Input() public set id(_id: string) {
    this._id = _id;
  }
  @Input() public set errorMessage(_errorMessage: string | {[key: string]: string}) {
    this._errorMessage = _errorMessage;
  };

  @Output() public search = new EventEmitter<string>();

  @ViewChild('input', { static: true }) inputElement!: ElementRef<HTMLInputElement>;

  public _id = '';
  public value = '';
  public touched = false;
  public disabled = false;
  public required = false;
  public actions: InputAction[] = [];
  public error!: EgInputStateMatcher;
  private subscription = new Subscription();
  public _errorMessage: string | {[key: string]: string} = '';

  get id(): string {
    return `input-${this._id || this.label}`;
  }

  public visibilityOnClearButton(action: string): boolean {
    return action !== ButtonAction.clearAction ? true : !!this.control.value.length || !!this.value.length;
  }

  get control(): AbstractControl {
    return this.ngControl.control!;
  }

  get input(): HTMLInputElement {
    return this.inputElement.nativeElement;
  }

  get errorMessage(): string {
    if (typeof this._errorMessage === 'string') {
      return this._errorMessage;
    }
    const key = Object.keys(this.control?.errors! || [])[0]?.toLowerCase();
    return this._errorMessage[key];
  }

  constructor(
    @Optional() @Self() private ngControl: NgControl,
    private readonly clipboard: Clipboard
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.createButtons(changes);
  }

  public ngOnInit(): void {
    this.setInputValue();
    this.setRequiredInput();
    this.setControlValueRegardingToUpdateType();
    this.setErrorMatcher();
    this.setTouched();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onTouch: () => void = noop;
  public onChange: (value: string) => void = noop;

  public writeValue(value: string): void {
    this.inputElement.nativeElement.value = value;
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

  private setControlValueRegardingToUpdateType(): void {
    const event = fromEvent(this.input, this.control?.updateOn === UpdateMode.blur ? UpdateMode.blur : 'input');
    this.subscription.add(event.subscribe(() => this.control?.setValue(this.input.value)));
  }

  private setInputValue(): void {
    this.value = this.control.value;
  }

  private setRequiredInput(): void {
    this.required = this.ngControl.control?.hasValidator(Validators.required) as boolean;
  }

  private setErrorMatcher(): void {
    this.error = new EgInputStateMatcher(this.control);
  }

  private setTouched(): void {
    this.subscription.add(
      fromEvent(this.input, 'blur')
        .pipe(first())
        .subscribe(() => this.control.markAsTouched())
    );
  }

  private createButtons(changes: SimpleChanges): void {
    const buttonAction: string[] = changes['buttonAction']?.currentValue;
    if (!!buttonAction?.length) {
      buttonAction.forEach((action: string) => {
        this.actions.push({
          action,
          icon: ButtonIcon[action as keyof typeof ButtonIcon],
          click: (event: Event) => [
            this[action as keyof typeof ButtonIcon](),
            action !== ButtonAction.clearAction ? this.avoidFocusOnInput(event) : null
          ]
        });
      });
    }
  }

  private togglePasswordAction(): void {
    const passwordButtonIndex = this.actions.findIndex((action) => action.action === ButtonAction.togglePasswordAction);
    const isVisible = this.actions[passwordButtonIndex].icon === ButtonIcon.togglePasswordAction;
    this.actions[passwordButtonIndex].icon = isVisible ? `${ButtonIcon.togglePasswordAction}_off` : ButtonIcon.togglePasswordAction;
    this.type = isVisible ? 'text' : 'password';
  }

  private searchAction(): void {
    this.search.emit(this.value);
  }

  private copyAction(): void {
    this.clipboard.copy(this.value);
  }

  private clearAction(): void {
    this.value = '';
    this.control.setValue('');
  }

  private avoidFocusOnInput(event: Event): void {
    event?.stopPropagation();
    event?.preventDefault();
  }
}

class EgInputStateMatcher implements ErrorStateMatcher {

  constructor(public control: AbstractControl<FormControl>) { }

  public isErrorState(): boolean {
    return !this.control?.valid && (this.control?.dirty || this.control?.touched);
  }
}

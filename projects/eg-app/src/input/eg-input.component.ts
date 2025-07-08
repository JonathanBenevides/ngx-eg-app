import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, Optional, Output, Self, SimpleChanges, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NgControl, Validators } from '@angular/forms';
import { first, fromEvent, noop } from 'rxjs';
import { Subscription } from 'rxjs';
import { Clipboard } from '@angular/cdk/clipboard';
import { AppearanceType, InputType, ButtonActionType } from '../shared/type/eg-input.type';
import { EgInputModule } from '../shared/module/eg-input.module';
import { ButtonIcon, UpdateMode } from '../shared/enum/eg-input.enum';
import { EgInputStateMatcher } from '../shared/class/eg-input.class';
import { ButtonAction } from '../shared/interface/eg-input.interface';

@Component({
  imports: [EgInputModule],
  selector: 'ngx-eg-input',
  templateUrl: './eg-input.component.html',
  styleUrl: './eg-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxEgInput implements ControlValueAccessor, OnDestroy, OnChanges {

  @Input() public hint = '';
  @Input() public label = '';
  @Input() public maxlength = '';
  @Input() public iconSuffix = '';
  @Input() public placeholder = '';
  @Input() public type: InputType = 'text';
  @Input() public appearance: AppearanceType = "fill";
  @Input() public buttonAction: ButtonActionType[] = [];
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
  public actions: ButtonAction[] = [];
  public error!: EgInputStateMatcher;
  private subscription$ = new Subscription();
  public _errorMessage: string | {[key: string]: string} = '';

  get id(): string {
    return `input-${this._id || this.label.replaceAll(' ', '-')}`;
  }

  public visibilityOnClearButton(action: ButtonActionType): boolean {
    return action !== 'clearAction' ? true : !!this.control?.value?.length || !!this.value?.length;
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
    private readonly clipboard: Clipboard,
    private readonly cdr: ChangeDetectorRef
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
    this.subscription$.unsubscribe();
  }

  public onTouch: () => void = noop;
  public onChange: (value: string) => void = noop;

  public writeValue(value: string): void {
    this.inputElement.nativeElement.value = value;
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

  private setControlValueRegardingToUpdateType(): void {
    const event = fromEvent(this.input, this.control?.updateOn === UpdateMode.blur ? UpdateMode.blur : 'input');
    this.subscription$.add(event.subscribe(() => this.control?.setValue(this.input.value)));
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
    this.subscription$.add(
      fromEvent(this.input, 'blur')
        .pipe(first())
        .subscribe(() => this.control.markAsTouched())
    );
  }

  private createButtons(changes: SimpleChanges): void {
    const buttonAction: ButtonActionType[] = changes['buttonAction']?.currentValue;
    if (!!buttonAction?.length) {
      buttonAction.forEach((action: ButtonActionType) => {
        this.actions.push({
          action,
          icon: ButtonIcon[action as keyof typeof ButtonIcon],
          click: (event: Event) => [
            this[action as keyof typeof ButtonIcon](),
            action !== 'clearAction' ? this.avoidFocusOnInput(event) : null
          ]
        });
      });
    }
  }

  private togglePasswordAction(): void {
    const passwordButtonIndex = this.actions.findIndex((action: ButtonAction) => action.action === 'togglePasswordAction');
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

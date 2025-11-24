import { Clipboard } from '@angular/cdk/clipboard';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, EventEmitter, Input, OnInit, Optional, Output, Self, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgControl } from '@angular/forms';
import { IonInput } from '@ionic/angular/standalone';
import { MaskitoElementPredicate, MaskitoOptions, maskitoTransform } from '@maskito/core';
import { addIcons } from 'ionicons';
import { call, close, copyOutline, eye, eyeOff, eyeOffOutline, eyeOutline, person, searchOutline } from 'ionicons/icons';
import { noop } from 'rxjs';

import { EgControlValueAccessor } from '../../../shared/class/eg-control-value-accessor.class';
import { ButtonIcon, UpdateMode } from '../../../shared/enum/eg-input.enum';
import { EgInputValueAccessor } from '../../../shared/interface/generic.interface';
import { ButtonActionType, InputType } from '../../../shared/type/eg-input.type';
import { InputButtonAction } from '../../interfaces/eg-input.interface';
import { IMPORTS } from '../../../shared/module/eg-input.module';

@Component({
  imports: [IMPORTS],
  selector: 'ngx-eg-input',
  templateUrl: './eg-input.component.html',
  styleUrl: './eg-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class NgxEgInput extends EgControlValueAccessor implements OnInit, DoCheck, EgInputValueAccessor, AfterViewInit {

  @Input() public prefixIcon = '';
  @Input() public suffixIcon = '';
  @Input() public currency = '';
  @Input() public maxlength = null;
  @Input() public placeholder = '';
  @Input() public autocomplete = false;
  @Input() public ableCopyButton = false;
  @Input() public showCustomError = false;
  @Input() public ableCleanButton = false;
  @Input() public type: InputType = 'text';
  @Input() public ableShowPasswordButton = false;
  @Input() public ableSearchPasswordButton = false;
  @Input() public fill: 'outline' | 'solid' = 'solid';
  @Input() public labelPlacement: 'stacked' | 'floating' = 'floating';

  @Input() public set mask(_mask: string) {
    this._mask = _mask ? { mask: this.toMask(_mask) } : null;

    if (this.ionInput?.value) {
      const maskedValue = this._mask ? maskitoTransform(this.value, this._mask) : this.unMask(this.ionInput?.value.toString());
      this.ionInput.value = maskedValue;
      this.control.setValue(maskedValue, { emitEvent: false });
    }

    this.cdr.markForCheck();
  };

  @Input() public set buttonAction(actions: ButtonActionType | ButtonActionType[] | null) {
    this.createButtons(actions);
  };

  @Output() public blur = new EventEmitter<void>();
  @Output() public focus = new EventEmitter<void>();
  @Output() public search = new EventEmitter<string>();

  @ViewChild('ionInput', { static: false }) public ionInput!: IonInput;

  public override value = '';
  public actions: InputButtonAction[] = [];
  public _mask: MaskitoOptions | null = null;

  constructor(
    @Optional() @Self() protected override ngControl: NgControl,
    private readonly clipboard: Clipboard,
    protected override readonly cdr: ChangeDetectorRef
  ) {
    super(ngControl, cdr);
    addIcons({ eye, eyeOff, eyeOffOutline, eyeOutline, searchOutline, copyOutline, close, person, call });
  }

  public ngAfterViewInit(): void {
    this.parentErrors = {};
    this.checkParentErrors(this.control);
    this.cdr.markForCheck();
  }

  public override ngOnInit(): void {
    this.value = this._mask ? maskitoTransform(this.control?.value || '', this._mask) : this.control.value;
    this.setRequiredInput();
  }

  public ngDoCheck(): void {
    this.cdr.markForCheck();
  }

  public override onChange: (value: string) => void = noop;

  public override writeValue(value: string): void {
    this.value = value;
    this.cdr.markForCheck();
  }

  public onFocus(): void {
    this.hasFocus = true;
    this.focus.emit();
  }

  public onBlur(event: CustomEvent): void {
    const { value, localName } = event.target as HTMLInputElement;

    if (localName === 'ion-button') {
      return;
    }

    this.hasFocus = false;
    this.blur.emit();

    const unmasked = this._mask ? this.unMask(value) : value;

    if (this.control?.updateOn === UpdateMode.blur) {
      this.control?.setValue(unmasked);
    }

    this.onTouch();
    this.chageValueRoutine(value, unmasked);
  }

  public handleChange({ detail: { value } }: CustomEvent): void {
    const unmasked = this._mask ? this.unMask(value) : value;

    if (this.control?.updateOn === UpdateMode.change) {
      this.control?.setValue(unmasked);
      this.chageValueRoutine(value, unmasked);
    }
  }

  public visibilityOnClearButton(action: ButtonActionType): boolean {
    return action !== 'clearAction' ? true : !!this.control?.value?.length || !!this.value?.length;
  }

  public readonly maskPredicate: MaskitoElementPredicate = (el) => (el as unknown as HTMLIonInputElement).getInputElement();

  public get hasCurrencyClass(): boolean {
    return !!this.control?.value?.length || this.hasFocus;
  }

  private toMask(_mask: string): (string | RegExp)[] {
    return Object.values(_mask).map(value => {
      return value.toLowerCase() === 'x' ? /\d/ : value;
    });
  }

  private unMask(_mask: string): string {
    return _mask.replace(/\D/g, '');
  }

  private createButtons(actions: ButtonActionType | ButtonActionType[] | null): void {

    let buttonAction = actions;

    if (typeof buttonAction === 'string') {
      buttonAction = [buttonAction];
    }

    this.type = (buttonAction as ButtonActionType[]).some((action) => action === 'togglePasswordAction') ? 'password' : this.type;

    if (!!buttonAction?.length) {
      this.actions = buttonAction.map((action: ButtonActionType) => {
        return {
          action,
          icon: ButtonIcon[action as keyof typeof ButtonIcon],
          click: (): void => this[action as keyof typeof ButtonIcon]()
        };
      });
    }
  }

  private togglePasswordAction(): void {
    const passwordButtonIndex = this.actions.findIndex((action: InputButtonAction) => action.action === 'togglePasswordAction');
    const isVisible = this.actions[passwordButtonIndex].icon === ButtonIcon.togglePasswordAction;
    this.actions[passwordButtonIndex].icon = isVisible ? `eye-off-outline` : ButtonIcon.togglePasswordAction;
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
    this.ionInput.setFocus();
    this.control.reset();
  }

  private chageValueRoutine(value: string, unmasked: string): void {
    this.value = value;
    this.onChange(unmasked || value);
    this.parentErrors = {};
    this.checkParentErrors(this.control);
    this.cdr.markForCheck();
  }
}

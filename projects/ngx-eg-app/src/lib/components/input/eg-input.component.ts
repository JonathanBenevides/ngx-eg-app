import { Clipboard } from '@angular/cdk/clipboard';
import { CommonModule, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Optional, Output, Self, ViewChild } from '@angular/core';
import { AbstractControl, FormsModule, NgControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonButton, IonIcon, IonInput, IonNote } from '@ionic/angular/standalone';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoElementPredicate, MaskitoOptions, maskitoTransform } from '@maskito/core';
import { addIcons } from 'ionicons';
import { close, copyOutline, eye, eyeOff, eyeOffOutline, eyeOutline, searchOutline } from 'ionicons/icons';
import { noop, Subscription } from 'rxjs';

import { EgControlValueAccessor } from '../../../shared/class/eg-control-value-accessor.class';
import { ButtonIcon, UpdateMode } from '../../../shared/enum/eg-input.enum';
import { ButtonAction } from '../../../shared/interface/eg-input.interface';
import { ButtonActionType, InputType } from '../../../shared/type/eg-input.type';
import { IdGenerator } from '../../pipes/id-generator/id-generator.pipe';

@Component({
  imports: [IonIcon, FormsModule, ReactiveFormsModule, IonInput, NgClass, CommonModule, IdGenerator, IonNote, IonButton, MaskitoDirective],
  selector: 'ngx-eg-input',
  templateUrl: './eg-input.component.html',
  styleUrl: './eg-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxEgInput extends EgControlValueAccessor implements OnDestroy, OnInit {

  @Input() public prefixIcon = '';
  @Input() public suffixIcon = '';
  @Input() public maxlength = null;
  @Input() public placeholder = '';
  @Input() public autocomplete = false;
  @Input() public ableCopyButton = false;
  @Input() public ableCleanButton = false;
  @Input() public type: InputType = 'text';
  @Input() public ableShowPasswordButton = false;
  @Input() public ableSearchPasswordButton = false;
  @Input() public fill: 'outline' | 'solid' = 'solid';
  @Input() public labelPlacement: 'stacked' | 'floating' = 'floating';
  @Input() public set mask(_mask: string) {
    this._mask = { mask: this.toMask(_mask) };
  };
  @Input() public set buttonAction(actions: ButtonActionType | ButtonActionType[] | null) {
    this.createButtons(actions);
  };

  @Output() public search = new EventEmitter<string>();

  @ViewChild('ionInput', { static: false }) public ionInput!: IonInput;

  public override value = '';
  public actions: ButtonAction[] = [];
  public _mask: MaskitoOptions | null = null;
  private readonly subscription$ = new Subscription();

  public get control(): AbstractControl {
    return this.ngControl.control!;
  }

  constructor(
    @Optional() @Self() protected override ngControl: NgControl,
    private readonly clipboard: Clipboard,
    protected override readonly cdr: ChangeDetectorRef
  ) {
    super(ngControl, cdr);
    addIcons({ eye, eyeOff, eyeOffOutline, eyeOutline, searchOutline, copyOutline, close });
  }

  public ngOnInit(): void {
    this.value = this._mask ? maskitoTransform(this.control.value, this._mask) : this.control.value;
    this.setRequiredInput();
  }

  public ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  public override onChange: (value: string) => void = noop;

  public override writeValue(value: string): void {
    this.value = value;
    this.cdr.markForCheck();
  }

  public onBlur(event: CustomEvent): void {
    const { value, localName } = event.target as HTMLInputElement;
    if (localName === 'ion-button') {
      return;
    }

    const unmasked = this._mask ? this.unMask(value) : value;

    if (this.control?.updateOn === UpdateMode.blur) {
      this.control?.setValue(unmasked);
    }
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

  public readonly maskPredicate: MaskitoElementPredicate = (el) => (el as HTMLIonInputElement).getInputElement();

  private setRequiredInput(): void {
    this.required = this.control?.hasValidator(Validators.required) as boolean;
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
    const passwordButtonIndex = this.actions.findIndex((action: ButtonAction) => action.action === 'togglePasswordAction');
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
    this.onTouch();
    this.cdr.markForCheck();
  }
}

import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, effect, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Optional, Output, Self, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule, NgControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonInputOtp, IonNote } from '@ionic/angular/standalone';

import { EgControlValueAccessor } from '../../../shared/class/eg-control-value-accessor.class';
import { UpdateMode } from '../../../shared/enum/eg-input.enum';
import { EgInputValueAccessor } from '../../../shared/interface/generic.interface';
import { CountDownService } from '../../../shared/services/count-down.service';
import { FOUR, ZERO } from '../../utils/magic-number';
import { distinctUntilChanged, filter, skip } from 'rxjs';

@Component({
  selector: 'ngx-eg-opt',
  imports: [IonInputOtp, ReactiveFormsModule, CommonModule, FormsModule, IonNote],
  templateUrl: './eg-opt-input.component.html',
  styleUrl: './eg-opt-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CountDownService]
})
export class NgxEgOptInput extends EgControlValueAccessor implements EgInputValueAccessor, OnInit, OnDestroy {

  @Input() public digits = FOUR;
  @Input() public time: number = ZERO;
  @Input() public override label: string = '';

  @Output() public complete: EventEmitter<void> = new EventEmitter();

  @ViewChild('opt', { static: false }) public opt!: IonInputOtp;


  constructor(
    @Optional() @Self() protected override ngControl: NgControl,
    protected override readonly cdr: ChangeDetectorRef,
    private readonly countDown: CountDownService
  ) {
    super(ngControl, cdr);
    this.countDown.timerIsRunning
      .pipe(
        skip(2),
        distinctUntilChanged(),
        filter(isRunning => !isRunning)
      )
      .subscribe(() => {
        this.onTouch();
        this.checkErrors();
        this.cdr.markForCheck();
      });
  }

  public ngOnDestroy(): void {
    this.countDown.stop();
  }

  public override ngOnInit(): void {
    if (!!this.time) {
      this.startCountDown();
    }
  }

  public override writeValue(value: any): void {
    if (value === null && this.control.errors!['timeout']) { // se deu reset, o value fica como null
      this.startCountDown();
    }
    this.value = value;
    this.cdr.markForCheck();
  }

  public onBlur(event: CustomEvent): void {
    const { value } = event.target as HTMLInputElement;
    this.onTouch();
    this.chageValueRoutine(value);
  }

  public handleChange({ detail: { value } }: CustomEvent): void {
    if (this.control?.updateOn === UpdateMode.change) {
      this.chageValueRoutine(value);
    }
  }

  private chageValueRoutine(value: string): void {
    this.value = value;
    this.onChange(value);
    this.checkErrors();
    this.cdr.markForCheck();
  }

  private checkErrors(): void {
    if (!!this.time && !this.countDown.timerIsRunning.value) {
      this.control.setErrors({ timeout: true });
      return;
    }
    if (this.control.touched) {
      if (!this.value && this.control?.hasValidator(Validators.required)) {
        this.control.setErrors({ required: true });
        return;
      }
      if (this.value?.length !== this.digits) {
        this.control.setErrors({ minlength: true });
        return;
      }
    }
  }

  private startCountDown(): void {
    if (!!this.time) {
      this.control.markAsUntouched();
      this.countDown.start(this.time);
      this.opt?.setFocus(ZERO);
    }
  }
}

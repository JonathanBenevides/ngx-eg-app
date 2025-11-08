import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FOUR, NgxEgTimer, SIX, TEN } from 'ngx-eg-app';
import { Subscription } from 'rxjs';

import { DefaultForm } from '../../shared/interface/custom-form.interface';

import { DEFAULT_FILE } from './files/default.constant';
import { GERAL_FILE } from './files/full-component.constant';
import { INITIAL_PRESENTATION } from './files/initial-presentation.constant';
import { N_OF_DIGITS_FILE } from './files/number-of-digits.constant';
import { IMPORTS } from './opt.module';

@Component({
  selector: 'app-opt',
  imports: [IMPORTS],
  templateUrl: './opt.component.html',
  styleUrl: './opt.component.scss'
})
export class OptComponent implements DefaultForm, OnInit {

  @ViewChild('timer') public timer!: NgxEgTimer;

  public initialPresentation = INITIAL_PRESENTATION;
  public geralDoc = GERAL_FILE;
  public numOfDigitsDoc = N_OF_DIGITS_FILE;
  public defDoc = DEFAULT_FILE;

  public showDefDoc: boolean = false;
  public showGeralDoc: boolean = false;
  public showNOfDigitsDoc: boolean = false;

  public time = TEN;
  public timeout = false;
  public form!: FormGroup;
  public form2!: FormGroup;
  public form3!: FormGroup;
  public subscription: Subscription = new Subscription();

  constructor(private readonly fb: FormBuilder) { }

  public ngOnInit(): void {
    this.createForm();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public timeOut(): void {
    this.timeout = true;
  }

  public resend(): void {
    this.form.reset();
    this.timeout = false;
    this.time = TEN;
    this.timer.start();
  }

  public onSubmit(): void {
    console.log(this.form);
  }

  public onClear(): void {
    this.form.reset();
  }

  public createForm(): void {
    this.form = this.fb.group({
      opt: new FormControl('', [Validators.required, Validators.minLength(FOUR)])
    });
    this.form2 = this.fb.group({
      opt: new FormControl('', [Validators.required, Validators.minLength(SIX)])
    });
    this.form3 = this.fb.group({
      opt: new FormControl('', [Validators.required, Validators.minLength(FOUR)])
    });
  }
}

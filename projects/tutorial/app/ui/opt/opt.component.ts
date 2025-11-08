import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxEgTimer, TEN } from 'ngx-eg-app';
import { Subscription } from 'rxjs';

import { DefaultForm } from '../../shared/interface/custom-form.interface';

import { INITIAL_PRESENTATION } from './files/initial-presentation.constant';
import { IMPORTS } from './opt.module';
import { GERAL_FILE } from './files/full-component.constant';
import { N_OF_DIGITS_FILE } from './files/number-of-digits.constant';
import { DEFAULT_FILE } from './files/default.constant';

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
      opt: new FormControl('', [Validators.required, Validators.minLength(4)]),
    });
    this.form2 = this.fb.group({
      opt: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
    this.form3 = this.fb.group({
      opt: new FormControl('', [Validators.required, Validators.minLength(4)]),
    });
  }
}

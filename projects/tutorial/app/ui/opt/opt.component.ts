import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxEgButton, NgxEgOptInput, TEN } from 'ngx-eg-app';
import { Subscription } from 'rxjs';

import { FOUR, NgxEgTimer } from '../../../../ngx-eg-app/src/public-api';
import { DefaultForm } from '../../shared/interface/custom-form.interface';

@Component({
  selector: 'app-opt',
  imports: [NgxEgOptInput, NgxEgButton, NgxEgTimer, ReactiveFormsModule],
  templateUrl: './opt.component.html',
  styleUrl: './opt.component.scss'
})
export class OptComponent implements DefaultForm, OnInit {

  @ViewChild('timer') public timer!: NgxEgTimer;

  public time = TEN;
  public timeout = false;
  public form!: FormGroup;
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

  public onSubmit(): void { }

  public onClear(): void {
    this.form.reset();
  }

  public createForm(): void {
    this.form = this.fb.group({
      opt: new FormControl('', [Validators.required, Validators.minLength(FOUR)])
    });
  }
}

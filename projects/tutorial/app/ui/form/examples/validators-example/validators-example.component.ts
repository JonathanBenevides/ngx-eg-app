import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { NgxEgCheckBox, NgxEgSelect, REQ_EMAIL, REQ_NAME, REQ_NUMBER, SIX, ZERO } from 'ngx-eg-app';
import { Subscription } from 'rxjs';

import { DefaultForm, ObservableForm } from '../../../../shared/interface/custom-form.interface';
import { IMPORTS } from '../example.module';

import { DOC_FILE } from './doc-file.constant';

function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      const error = { passwordMismatch: true };
      password.setErrors(error);
      confirmPassword.setErrors(error);
      return error;
    }
    return null;
  };
}

@Component({
  selector: 'app-validators-example',
  imports: [IMPORTS, NgxEgCheckBox, NgxEgSelect],
  templateUrl: './validators-example.component.html'
})
export class ValidatorsExampleComponent implements ObservableForm, DefaultForm {

  public showDoc = false;
  public docFile = DOC_FILE;

  public form!: FormGroup;
  public deepForm!: FormGroup;

  public genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' }
  ];
  public subscription: Subscription = new Subscription();

  constructor(private readonly fb: FormBuilder) {
    this.createForm();
    this.formChanges();
  }

  public createForm(): void {
    this.form = this.fb.group({
      firstName: ['', REQ_NAME],
      lastName: ['', REQ_NAME],
      gender: [null, Validators.required],
      birthDate: ['', Validators.required],
      email: ['', REQ_EMAIL],
      phoneNumber: ['', REQ_NUMBER],
      value: ['', REQ_NUMBER],
      password: ['', [Validators.required, Validators.minLength(SIX)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, { validators: passwordMatchValidator() });
    this.deepForm = this.fb.group({
      password: [ZERO],
      confirmPassword: [ZERO],
      groupOne: this.fb.group({
        first: [ZERO],
        groupTwo: this.fb.group({
          last: [ZERO]
        })
      })
    }, { validators: passwordMatchValidator() });
  }

  public onClear(): void {
    this.form.reset();
  }

  public formChanges(): void {
    this.subscription.add(
      this.form.valueChanges.subscribe(console.log)
    );
    this.subscription.add(
      this.deepForm.valueChanges.subscribe(() => {})
    );
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public openTerms(event: Event): void {
    event.preventDefault();
    alert('Display Terms of Use (modal or separate page)');
  }

  public onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}


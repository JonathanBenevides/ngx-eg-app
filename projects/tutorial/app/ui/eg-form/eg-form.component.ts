import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { NgxEgButton, NgxEgCheckBox, NgxEgInput, NgxEgSelect, REQ_EMAIL, REQ_NAME, REQ_NUMBER } from 'ngx-eg-app';
import { Subscription } from 'rxjs';

import { DefaultForm, ObservableForm } from '../../shared/interface/custom-form.interface';

const SIX = 6;

function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      const error = { passwordMismatch: true };
      confirmPassword.setErrors(error);
      return error;
    }
    return null;
  };
}

@Component({
  selector: 'app-eg-form',
  imports: [ReactiveFormsModule, NgxEgInput, NgxEgSelect, NgxEgCheckBox, NgxEgButton],
  templateUrl: './eg-form.component.html',
  styleUrl: './eg-form.component.scss'
})
export class EgFormComponent implements ObservableForm, DefaultForm {
  public form: FormGroup;
  public genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' }
  ];
  public subscription: Subscription = new Subscription();

  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', REQ_NAME],
      lastName: ['', REQ_NAME],
      gender: [null, Validators.required],
      birthDate: ['', Validators.required],
      email: ['', REQ_EMAIL],
      phoneNumber: ['', REQ_NUMBER],
      password: ['', [Validators.required, Validators.minLength(SIX)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, { validators: passwordMatchValidator() });
  }

  public onClear(): void {
    this.form.reset();
  }

  public formChanges(): void {
    this.subscription.add(
      this.form.valueChanges.subscribe(console.log)
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

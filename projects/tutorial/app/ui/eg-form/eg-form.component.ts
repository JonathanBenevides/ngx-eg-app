import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { DefaultForm, ObservableForm } from '../../shared/interface/custom-form.interface';
import { Subscription } from 'rxjs';
import { NgxEgButton, NgxEgCheckBox, NgxEgInput, NgxEgSelect, REQ_EMAIL, REQ_NAME, REQ_NUMBER } from 'ngx-eg-app';

function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      const error = { passwordMismatch: true };
      confirmPassword.setErrors(error)
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
  form: FormGroup;
  genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' }
  ];
  subscription: Subscription = new Subscription();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', REQ_NAME],
      lastName: ['', REQ_NAME],
      gender: [null, Validators.required],
      birthDate: ['', Validators.required],
      email: ['', REQ_EMAIL],
      phoneNumber: ['', REQ_NUMBER],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, { validators: passwordMatchValidator() });
  }

  onClear(): void {
    this.form.reset()
  }

  formChanges(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  openTerms(event: Event): void {
    event.preventDefault();
    alert('Display Terms of Use (modal or separate page)');
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      // Handle form submission (e.g., send to API)
    }
  }
}

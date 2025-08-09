import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxEgButton, NgxEgInput, REQ_EMAIL, REQ_NAME, validDate } from 'ngx-eg-app';
import { Subscription } from 'rxjs';

import { DefaultForm, ObservableForm } from '../../shared/interface/custom-form.interface';

@Component({
  selector: 'app-input',
  imports: [FormsModule, ReactiveFormsModule, NgxEgInput, NgxEgButton],
  templateUrl: './input.component.html'
})
export class InputComponent implements ObservableForm, DefaultForm {

  public form!: FormGroup;
  public subscription: Subscription = new Subscription();

  constructor(private readonly fb: FormBuilder) {}

  public createForm(): void {
    this.form = this.fb.group({
      email: new FormControl('', { validators: REQ_EMAIL }),
      pass: new FormControl('', Validators.required),
      phone: new FormControl('11953564438', Validators.required),
      name: new FormControl('', { validators: REQ_NAME }),
      date: new FormControl('', { validators: [validDate()] })
    }, { updateOn: 'change' });
    this.formChanges();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public formChanges(): void {
    this.form.valueChanges.subscribe(() => console.log(this.form));
  }

  public onSubmit(): void {
    console.log(this.form.value);
  }

  public onSearch(): void {
    console.log(this.form.value);
  }

  public onClear(): void {
    this.form.reset();
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxEgButton, NgxEgSelect, Select } from 'ngx-eg-app';
import { Subscription } from 'rxjs';

import { DefaultForm, ObservableForm } from '../../shared/interface/custom-form.interface';

@Component({
  selector: 'app-eg-select',
  imports: [NgxEgSelect, ReactiveFormsModule, NgxEgButton],
  templateUrl: './eg-select.component.html',
  styleUrl: './eg-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EgSelectComponent implements ObservableForm, DefaultForm {

  public form!: FormGroup;

  public options: Select[] = [
    { label: 'Option 1', value: 'string' },
    { label: 'Option 2', value: 'string2' },
    { label: 'Option 3', value: 'string3' },
    { label: 'Option 5', value: 'string5' },
    { label: 'Option 4', value: 'string4' }
  ];

  public subscription: Subscription = new Subscription();

  constructor(private readonly fb: FormBuilder) {
    this.createForm();
    this.formChanges();
  }

  public createForm(): void {
    this.form = this.fb.group({
      option: new FormControl(null, Validators.required)
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public formChanges(): void {
    this.subscription.add(
      this.form.valueChanges.subscribe(console.log)
    );
  }

  public onSubmit(): void {
    this.form.get('option')!.markAsTouched();
    console.log(this.form.get('option'));
  }

  public onClear(): void {
    this.form.reset();
    console.log(this.form.get('option'));
  }
}

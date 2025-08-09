import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxEgButton, NgxEgCheckBox } from 'ngx-eg-app';
import { Subscription } from 'rxjs';

import { DefaultForm, ObservableForm } from '../../shared/interface/custom-form.interface';

@Component({
  selector: 'app-checkbox',
  imports: [NgxEgCheckBox, NgxEgButton, ReactiveFormsModule],
  templateUrl: './eg-checkbox.component.html',
  styleUrl: './eg-checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EgCheckboxComponent implements ObservableForm, DefaultForm {

  public form!: FormGroup;
  public subscription: Subscription = new Subscription();

  constructor(private readonly fb: FormBuilder) {
    this.createForm();
    this.formChanges();
  }

  public createForm(): void {
    this.form = this.fb.group({
      check: new FormControl(null, Validators.requiredTrue)
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
    this.form.get('check')!.markAsTouched();
    console.log(this.form.get('check'));
  }

  public onClear(): void {
    this.form.reset();
    console.log(this.form.get('check'));
  }
}


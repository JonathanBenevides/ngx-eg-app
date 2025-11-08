import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { REQ_EMAIL, REQ_NAME, validDate } from 'ngx-eg-app';
import { Subscription } from 'rxjs';
import { DefaultForm, ObservableForm } from '../../../../shared/interface/custom-form.interface';
import { IMPORTS } from '../example.module';

@Component({
  selector: 'app-full-input-example',
  imports: [IMPORTS],
  templateUrl: './full-input-example.component.html',
  styleUrl: './full-input-example.component.scss'
})
export class FullInputExampleComponent implements ObservableForm, DefaultForm {

  public form!: FormGroup;
  public showMask = false;
  public phoneMask = '(XX) X XXXX-XXXX';
  public subscription: Subscription = new Subscription();

  constructor(private readonly fb: FormBuilder) {
    this.createForm();
  }

  public createForm(): void {
    this.form = this.fb.group({
      email: new FormControl('', { validators: REQ_EMAIL }),
      pass: new FormControl('', Validators.required),
      phone: new FormControl('11953564438', Validators.required),
      name: new FormControl('', { validators: REQ_NAME }),
      date: new FormControl('', { validators: [validDate()] }),
      hybrid: new FormControl('', Validators.required)
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

  public focusStatusChange(hasFocus: boolean): void {
    this.showMask = this.form.get('hybrid')!.valid && !isNaN(this.form.get('hybrid')!.value) && !hasFocus;
  }
}


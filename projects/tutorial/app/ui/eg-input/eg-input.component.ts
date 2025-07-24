import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxEgButton, NgxEgInput, REQ_EMAIL, REQ_NAME } from 'ngx-eg-app';

@Component({
  selector: 'app-eg-input',
  imports: [FormsModule, ReactiveFormsModule, NgxEgInput, NgxEgButton],
  templateUrl: './eg-input.component.html',
  styleUrl: './eg-input.component.scss'
})
export class EgInputComponent {

  public form: FormGroup;
  public form2: FormGroup;

  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      email: new FormControl('', { validators: REQ_EMAIL }),
      pass: new FormControl('', Validators.required),
      name: new FormControl('', { validators: REQ_NAME })
    }, { updateOn: 'blur' });

    this.form2 = this.fb.group({
      email: new FormControl('', { validators: REQ_EMAIL }),
      pass: new FormControl('', Validators.required),
      name: new FormControl('', { validators: REQ_NAME })
    }, { updateOn: 'change' });

    this.form.valueChanges.subscribe(() => console.log(this.form));
    this.form2.valueChanges.subscribe(() => console.log(this.form));
  }

  public submit(): void {
    console.log(this.form.value);
    console.log(this.form2.value);
  }

  public search(): void {
    console.log(this.form.value);
    console.log(this.form2.value);
  }

  public clear(): void {
    this.form.reset();
    this.form2.reset();
  }
}

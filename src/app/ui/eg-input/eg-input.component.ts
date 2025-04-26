import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DefaultEgInput } from 'ngx-eg-app';

@Component({
  selector: 'app-eg-input',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MatFormFieldModule, MatInputModule, DefaultEgInput, CommonModule, FormsModule],
  templateUrl: './eg-input.component.html',
  styleUrl: './eg-input.component.scss'
})
export class EgInputComponent {
  private readonly fb = inject(FormBuilder);
  public form!: FormGroup;
  public form2!: FormGroup;
  public form3!: FormGroup;

  public ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl('', { validators: [Validators.required, Validators.email]}),
      pass: new FormControl('', Validators.required),
      name: new FormControl({ value: '', disabled: true }),
    }, { updateOn: 'blur' })
    this.form2 = this.fb.group({
      email: new FormControl('jonathanfbenevides@', { validators: [Validators.email], updateOn: 'blur'}),
      pass: new FormControl('1234567890', { validators: [Validators.required], updateOn: 'change'}),
      name: new FormControl({ value: 'Jonathan', disabled: false }, { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(10)]}),
    }, { updateOn: 'change' })
    this.form3 = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required]),
      name: new FormControl({ value: '', disabled: true }),
    }, { updateOn: 'change' })
    this.form.valueChanges.subscribe(() => console.log(this.form.valid))
    this.form2.valueChanges.subscribe(() => console.log(this.form2.valid))
    this.form3.valueChanges.subscribe(() => console.log(this.form3.valid))
  }

  submit() {
    console.log(this.form.value)
  }
  search() {
    console.log(this.form2.value)
  }

}

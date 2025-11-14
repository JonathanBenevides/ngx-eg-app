import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DOC_FILE } from './doc-file.constant';
import { IMPORTS } from '../example.module';
import { passwordMatchValidator } from './validator';

@Component({
  selector: 'app-deep-form-example',
  imports: [IMPORTS],
  templateUrl: './deep-form-example.component.html'
})
export class DeepFormExampleComponent {

  public showDoc = false;
  public docFile = DOC_FILE;

  public form: FormGroup = new FormGroup({
    password: new FormControl(),
    confirmPassword: new FormControl(),
  }, { validators: passwordMatchValidator() });
}

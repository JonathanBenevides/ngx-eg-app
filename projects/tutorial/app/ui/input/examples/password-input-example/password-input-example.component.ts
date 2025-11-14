import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DOC_FILE } from './doc-file.constant';
import { IMPORTS } from '../example.module';

@Component({
  selector: 'app-password-input-example',
  imports: [IMPORTS],
  templateUrl: './password-input-example.component.html'
})
export class PasswordInputExampleComponent {

  public form: FormGroup = new FormGroup({
    password: new FormControl()
  });

  public showDoc = false;
  public docFile = DOC_FILE;
}

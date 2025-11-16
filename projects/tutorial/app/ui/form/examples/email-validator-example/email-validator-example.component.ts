import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { REQ_EMAIL } from 'ngx-eg-app';

import { IMPORTS } from '../example.module';

import { DOC_FILE } from './doc-file.constant';

@Component({
  selector: 'app-email-validator-example',
  imports: [IMPORTS],
  templateUrl: './email-validator-example.component.html'
})
export class EmailValidatorExampleComponent {

  public showDoc = false;
  public docFile = DOC_FILE;

  public form: FormGroup = new FormGroup({
    email: new FormControl('', REQ_EMAIL)
  });
}

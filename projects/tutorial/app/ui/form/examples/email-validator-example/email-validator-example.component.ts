import { Component } from '@angular/core';
import { DOC_FILE } from './doc-file.constant';
import { FormControl, FormGroup } from '@angular/forms';
import { IMPORTS } from '../example.module';
import { REQ_EMAIL } from 'ngx-eg-app';

@Component({
  selector: 'app-email-validator-example',
  imports: [IMPORTS],
  templateUrl: './email-validator-example.component.html'
})
export class EmailValidatorExampleComponent {

  public showDoc = false;
  public docFile = DOC_FILE;

  public form: FormGroup = new FormGroup({
    email: new FormControl('', REQ_EMAIL),
  });
}

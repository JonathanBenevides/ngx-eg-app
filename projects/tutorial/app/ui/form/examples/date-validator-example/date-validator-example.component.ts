import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { validDate } from 'ngx-eg-app';

import { IMPORTS } from '../example.module';

import { DOC_FILE } from './doc-file.constant';

@Component({
  selector: 'app-date-validator-example',
  imports: [IMPORTS],
  templateUrl: './date-validator-example.component.html'
})
export class DateValidatorExampleComponent {

  public showDoc = false;
  public docFile = DOC_FILE;

  public form: FormGroup = new FormGroup({
    date: new FormControl('', validDate())
  });
}

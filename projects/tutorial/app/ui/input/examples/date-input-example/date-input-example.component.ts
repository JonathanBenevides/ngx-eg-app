import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { IMPORTS } from '../example.module';

import { DOC_FILE } from './doc-file.constant';

@Component({
  selector: 'app-date-input-example',
  imports: [IMPORTS],
  templateUrl: './date-input-example.component.html'
})
export class DateInputExampleComponent {

  public form: FormGroup = new FormGroup({
    date: new FormControl()
  });

  public showDoc = false;
  public docFile = DOC_FILE;
}

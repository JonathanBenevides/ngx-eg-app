import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { REQ_LETTERS } from 'ngx-eg-app';

import { IMPORTS } from '../example.module';

import { DOC_FILE } from './doc-file.constant';

@Component({
  selector: 'app-only-letters-validator-example',
  imports: [IMPORTS],
  templateUrl: './only-letters-validator-example.component.html'
})
export class OnlyLettersValidatorExampleComponent {

  public showDoc = false;
  public docFile = DOC_FILE;

  public form: FormGroup = new FormGroup({
    letter: new FormControl('', REQ_LETTERS)
  });
}

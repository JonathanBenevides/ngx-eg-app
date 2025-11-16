import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FOUR } from 'ngx-eg-app';

import { IMPORTS } from '../example.module';

import { DOC_FILE } from './doc-file.constant';

@Component({
  selector: 'app-error-input-example',
  imports: [IMPORTS],
  templateUrl: './error-input-example.component.html'
})
export class ErrorInputExampleComponent {

  public form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    value: new FormControl('', [Validators.required, Validators.minLength(FOUR)])
  });

  public showDoc = false;
  public docFile = DOC_FILE;
}

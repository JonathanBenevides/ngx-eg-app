import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TEN } from 'ngx-eg-app';

import { IMPORTS } from '../example.module';

import { DOC_FILE } from './doc-file.constant';

@Component({
  selector: 'app-custom-error-input-example',
  imports: [IMPORTS],
  templateUrl: './custom-error-input-example.component.html'
})
export class CustomErrorInputExampleComponent {

  public form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(TEN)])
  });

  public showDoc = false;
  public docFile = DOC_FILE;
}

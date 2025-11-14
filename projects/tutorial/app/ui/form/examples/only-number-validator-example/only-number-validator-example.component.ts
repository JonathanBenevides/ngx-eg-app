import { Component } from '@angular/core';
import { DOC_FILE } from './doc-file.constant';
import { FormControl, FormGroup } from '@angular/forms';
import { REQ_NUMBER } from 'ngx-eg-app';
import { IMPORTS } from '../example.module';

@Component({
  selector: 'app-only-number-validator-example',
  imports: [IMPORTS],
  templateUrl: './only-number-validator-example.component.html'
})
export class OnlyNumberValidatorExampleComponent {

  public showDoc = false;
  public docFile = DOC_FILE;

  public form: FormGroup = new FormGroup({
    number: new FormControl('', REQ_NUMBER),
  });
}
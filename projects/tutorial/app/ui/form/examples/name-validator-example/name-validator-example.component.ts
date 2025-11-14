import { Component } from '@angular/core';
import { IMPORTS } from '../example.module';
import { DOC_FILE } from './doc-file.constant';
import { FormControl, FormGroup } from '@angular/forms';
import { REQ_NAME } from 'ngx-eg-app';

@Component({
  selector: 'app-name-validator-example',
  imports: [IMPORTS],
  templateUrl: './name-validator-example.component.html'
})
export class NameValidatorExampleComponent {

  public showDoc = false;
  public docFile = DOC_FILE;

  public form: FormGroup = new FormGroup({
    name: new FormControl('', REQ_NAME),
  });
}

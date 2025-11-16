import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { REQ_ADDRESS_NUMBER } from 'ngx-eg-app';

import { IMPORTS } from '../example.module';

import { DOC_FILE } from './doc-file.constant';

@Component({
  selector: 'app-address-number-validator-example',
  imports: [IMPORTS],
  templateUrl: './address-number-validator-example.component.html'
})
export class AddressNumberValidatorExampleComponent {

  public showDoc = false;
  public docFile = DOC_FILE;

  public form: FormGroup = new FormGroup({
    number: new FormControl('', REQ_ADDRESS_NUMBER)
  });
}

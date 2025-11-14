import { Component } from '@angular/core';
import { IMPORTS } from '../example.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DOC_FILE } from './doc-file.constant';

@Component({
  selector: 'app-disabled-input-example',
  imports: [IMPORTS],
  templateUrl: './disabled-input-example.component.html'
})
export class DisabledInputExampleComponent {

  public form: FormGroup = new FormGroup({
    name: new FormControl({ value: 'Value', disabled: true }, Validators.required),
  });

  public showDoc = false;
  public docFile = DOC_FILE;
}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { IMPORTS } from '../example.module';

import { DOC_FILE } from './doc-file.constant';

@Component({
  selector: 'app-hint-input-example',
  imports: [IMPORTS],
  templateUrl: './hint-input-example.component.html'
})
export class HintInputExampleComponent {

  public form: FormGroup = new FormGroup({
    name: new FormControl()
  });

  public showDoc = false;
  public docFile = DOC_FILE;
}

import { Component } from '@angular/core';
import { IMPORTS } from '../example.module';
import { FormControl, FormGroup } from '@angular/forms';
import { DOC_FILE } from './doc-file.constant';

@Component({
  selector: 'app-icon-input-example',
  imports: [IMPORTS],
  templateUrl: './icon-input-example.component.html'
})
export class IconInputExampleComponent {

  public form: FormGroup = new FormGroup({
    name: new FormControl()
  });

  public showDoc = false;
  public docFile = DOC_FILE;
}

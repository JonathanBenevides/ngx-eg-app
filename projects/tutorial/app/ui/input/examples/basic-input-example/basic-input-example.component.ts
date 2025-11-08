import { Component, OnInit } from '@angular/core';
import { IMPORTS } from '../example.module';
import { DOC_FILE } from './doc-file.constant';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-input-example',
  imports: [IMPORTS],
  templateUrl: './basic-input-example.component.html'
})
export class BasicInputExampleComponent {

  public form: FormGroup = new FormGroup({
    name: new FormControl()
  });

  public showDoc = false;
  public docFile = DOC_FILE;
}

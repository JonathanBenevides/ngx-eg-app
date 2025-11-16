import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { BASIC_DOC_FILE } from './files/basic.constant';
import { INITIAL_PRESENTATION } from './files/doc-file.constant';
import { FORM_DOC_FILE } from './files/form.constant';
import { IMPORTS } from './toggle.module';

@Component({
  selector: 'app-toggle',
  imports: [IMPORTS],
  templateUrl: './toggle.component.html'
})
export class ToggleComponent {
  public initialPresentation = INITIAL_PRESENTATION;
  public showBasicDoc = false;
  public showFormDoc = false;
  public selection = true;
  public basicDocFile = BASIC_DOC_FILE;
  public formDocFile = FORM_DOC_FILE;

  public form: FormGroup = new FormGroup({
    toggle: new FormControl(true)
  });
}

import { Component } from '@angular/core';
import { IMPORTS } from '../example.module';
import { FormControl, FormGroup } from '@angular/forms';
import { DOC_FILE } from './doc-file.constant';

@Component({
  selector: 'app-actions-input-example',
  imports: [IMPORTS],
  templateUrl: './actions-input-example.component.html'
})
export class ActionsInputExampleComponent {

  public form: FormGroup = new FormGroup({
    clear: new FormControl(),
    multiple: new FormControl(),
  });

  public showDoc = false;
  public search = false;
  public docFile = DOC_FILE;

  public onSearch():void {
    this.search = !this.search;
  }
}

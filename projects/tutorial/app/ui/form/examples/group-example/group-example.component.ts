import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DOC_FILE } from './doc-file.constant';
import { IMPORTS } from '../example.module';

@Component({
  selector: 'app-group-example',
  imports: [IMPORTS],
  templateUrl: './group-example.component.html',
  styleUrl: './group-example.component.scss',
})
export class GroupExampleComponent {

  public border = false;
  public showDoc = false;
  public docFile = DOC_FILE;

  public form: FormGroup = new FormGroup({
    groupOne: new FormGroup({
      name: new FormControl(),
      groupTwo: new FormGroup({
        lastname: new FormControl(),
      })
    })
  });
}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DOC_FILE } from './doc-file.constant';
import { IMPORTS } from '../example.module';

@Component({
  selector: 'app-mask-input-example',
  imports: [IMPORTS],
  templateUrl: './mask-input-example.component.html'
})
export class MaskInputExampleComponent {

  public form: FormGroup = new FormGroup({
    phone: new FormControl('11953564438'),
    hybrid: new FormControl('11953564438')
  });

  public phoneMask = '(XX) X XXXX-XXXX';
  public showMask = true;
  public showDoc = false;
  public docFile = DOC_FILE;

  public focusStatusChange(hasFocus: boolean): void {
    this.showMask = this.form.get('hybrid')!.valid && !isNaN(this.form.get('hybrid')!.value) && !hasFocus;
  }
}

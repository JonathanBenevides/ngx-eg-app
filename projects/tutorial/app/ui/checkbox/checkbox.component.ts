import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { IMPORTS } from './checkbox.module';
import { CHECKBOX_MAIN_FILES } from './files/checkbox-main.constant';
import { EVERYTHING_FILE } from './files/everything.constant';

@Component({
  selector: 'app-checkbox',
  imports: [IMPORTS],
  templateUrl: './checkbox.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent {

  public form!: FormGroup;
  public subscription: Subscription = new Subscription();
  public everythingFile = EVERYTHING_FILE;
  public checkboxMainFiles = CHECKBOX_MAIN_FILES;
  public showCheckboxEverythingDoc: boolean = false;

  constructor(private readonly fb: FormBuilder) {
    this.createForm();
  }

  public createForm(): void {
    this.form = this.fb.group({
      check: new FormControl(null, Validators.requiredTrue)
    });
  }
}

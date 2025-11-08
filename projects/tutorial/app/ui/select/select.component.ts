import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Select } from 'ngx-eg-app';
import { Subscription } from 'rxjs';

import { EVERYTHING_FILE } from './files/everything.constant';
import { INITIAL_PRESENTATION } from './files/initial-presentation.constant';
import { IMPORTS } from './select.module';

@Component({
  selector: 'app-select',
  imports: [IMPORTS],
  templateUrl: './select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent {

  public form!: FormGroup;

  public options: Select[] = [
    { value: 'br', label: 'Brasil' },
    { value: 'us', label: 'Estados Unidos' },
    { value: 'es', label: 'Espanha' }
  ];

  public subscription: Subscription = new Subscription();

  public everythingFile = EVERYTHING_FILE;
  public initialPresentation = INITIAL_PRESENTATION;
  public showCheckboxEverythingDoc: boolean = false;

  constructor(private readonly fb: FormBuilder) {
    this.createForm();
  }

  public createForm(): void {
    this.form = this.fb.group({
      select: new FormControl(null, Validators.required)
    });
  }

  public onClear(): void {
    this.form.reset();
  }
}

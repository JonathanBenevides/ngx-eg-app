import { OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

export interface ObservableForm extends OnDestroy {
  subscription: Subscription;
  formChanges(): void;
}

export interface DefaultForm {
  form: FormGroup;
  onSubmit(): void;
  onClear(): void;
  createForm(): void;
}

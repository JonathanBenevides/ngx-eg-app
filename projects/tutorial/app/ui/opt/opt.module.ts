import { ReactiveFormsModule } from '@angular/forms';
import { NgxEgOptInput, NgxEgTimer } from 'ngx-eg-app';

import { BASE_IMPORTS } from '../../shared/module/base.module';

export const IMPORTS = [
  ...BASE_IMPORTS,
  NgxEgOptInput, ReactiveFormsModule, NgxEgTimer
];

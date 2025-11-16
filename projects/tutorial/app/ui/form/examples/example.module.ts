import { ReactiveFormsModule } from '@angular/forms';
import { NgxEgGroup, NgxEgInput, NgxEgToggle } from 'ngx-eg-app';

import { BASE_IMPORTS } from '../../../shared/module/base.module';

export const IMPORTS = [
  ...BASE_IMPORTS,
  ReactiveFormsModule, NgxEgInput, NgxEgGroup, NgxEgToggle
];

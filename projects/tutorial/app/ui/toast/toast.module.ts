import { ReactiveFormsModule } from '@angular/forms';
import { NgxEgSelect } from 'ngx-eg-app';

import { BASE_IMPORTS } from '../../shared/module/base.module';

export const IMPORTS = [
  ...BASE_IMPORTS,
  NgxEgSelect,
  ReactiveFormsModule
];

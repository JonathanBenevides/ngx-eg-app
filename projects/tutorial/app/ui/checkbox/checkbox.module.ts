import { ReactiveFormsModule } from '@angular/forms';
import { NgxEgCheckBox } from 'ngx-eg-app';

import { BASE_IMPORTS } from '../../shared/module/base.module';

export const IMPORTS = [
  ...BASE_IMPORTS,
  NgxEgCheckBox,
  ReactiveFormsModule
];

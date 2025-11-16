import { JsonPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxEgToggle } from 'ngx-eg-app';

import { BASE_IMPORTS } from '../../shared/module/base.module';

export const IMPORTS = [
  ...BASE_IMPORTS,
  NgxEgToggle,
  ReactiveFormsModule,
  JsonPipe
];

import { BASE_IMPORTS } from '../../shared/module/base.module';

import { ActionsInputExampleComponent } from './examples/actions-input-example/actions-input-example.component';
import { BasicInputExampleComponent } from './examples/basic-input-example/basic-input-example.component';
import { CustomErrorInputExampleComponent } from './examples/custom-error-input-example/custom-error-input-example.component';
import { DateInputExampleComponent } from './examples/date-input-example/date-input-example.component';
import { DisabledInputExampleComponent } from './examples/disabled-input-example/disabled-input-example.component';
import { ErrorInputExampleComponent } from './examples/error-input-example/error-input-example.component';
import { HintInputExampleComponent } from './examples/hint-input-example/hint-input-example.component';
import { IconInputExampleComponent } from './examples/icon-input-example/icon-input-example.component';
import { MaskInputExampleComponent } from './examples/mask-input-example/mask-input-example.component';
import { PasswordInputExampleComponent } from './examples/password-input-example/password-input-example.component';

export const COMPONENTS = [
  ...BASE_IMPORTS,
  BasicInputExampleComponent,
  HintInputExampleComponent,
  PasswordInputExampleComponent,
  IconInputExampleComponent,
  ActionsInputExampleComponent,
  DateInputExampleComponent,
  MaskInputExampleComponent,
  ErrorInputExampleComponent,
  DisabledInputExampleComponent,
  CustomErrorInputExampleComponent
];

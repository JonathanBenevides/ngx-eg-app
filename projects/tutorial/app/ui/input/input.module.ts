import { BASE_IMPORTS } from '../../shared/module/base.module';
import { BasicInputExampleComponent } from './examples/basic-input-example/basic-input-example.component';
import { FullInputExampleComponent } from './examples/full-input-example/full-input-example.component';

export const COMPONENTS = [
  ...BASE_IMPORTS,
  BasicInputExampleComponent,
  FullInputExampleComponent
];
